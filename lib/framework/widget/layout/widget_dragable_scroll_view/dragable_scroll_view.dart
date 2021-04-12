import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

class DragableScrollPositionType {
  static const DragableScrollPositionType initial =
      DragableScrollPositionType('initial');
  static const DragableScrollPositionType max =
      DragableScrollPositionType('max');
  static const DragableScrollPositionType min =
      DragableScrollPositionType('min');

  final String value;
  const DragableScrollPositionType(this.value);

  @override
  bool operator ==(type) {
    if (type is! DragableScrollPositionType) return false;
    return value == type.value;
  }

  @override
  int get hashCode => super.hashCode;
}

typedef ScrollableWidgetBuilder = Widget Function(
  BuildContext context,
  DraggableScrollController scrollController,
);

typedef OnDragPositionChange = void Function(
    DragableScrollPositionType positionType);

class DraggableScrollView extends StatefulWidget {
  const DraggableScrollView({
    Key key,
    this.initialChildSize = 0.5,
    this.minChildSize = 0.25,
    this.maxChildSize = 1.0,
    @required this.builder,
    this.onDragPositionChange,
    this.onScroll,
  })  : assert(initialChildSize != null),
        assert(minChildSize != null),
        assert(maxChildSize != null),
        assert(minChildSize >= 0.0),
        assert(maxChildSize <= 1.0),
        assert(minChildSize <= initialChildSize),
        assert(initialChildSize <= maxChildSize),
        assert(builder != null),
        super(key: key);

  /// The default value is `0.5`.
  final double initialChildSize;

  /// The default value is `0.25`.
  final double minChildSize;

  /// The default value is `1.0`.
  final double maxChildSize;

  final ScrollableWidgetBuilder builder;

  final OnDragPositionChange onDragPositionChange;

  final Function onScroll;

  @override
  _DraggableScrollViewState createState() => _DraggableScrollViewState();
}

class DraggableScrollNotification extends Notification
    with ViewportNotificationMixin {
  DraggableScrollNotification({
    @required this.extent,
    @required this.minExtent,
    @required this.maxExtent,
    @required this.initialExtent,
    @required this.context,
  })  : assert(extent != null),
        assert(initialExtent != null),
        assert(minExtent != null),
        assert(maxExtent != null),
        assert(0.0 <= minExtent),
        assert(maxExtent <= 1.0),
        assert(minExtent <= extent),
        assert(minExtent <= initialExtent),
        assert(extent <= maxExtent),
        assert(initialExtent <= maxExtent),
        assert(context != null);

  /// The current value of the extent, between [minExtent] and [maxExtent].
  final double extent;

  /// The minimum value of [extent], which is >= 0.
  final double minExtent;

  /// The maximum value of [extent].
  final double maxExtent;

  /// The initially requested value for [extent].
  final double initialExtent;

  final BuildContext context;

  @override
  void debugFillDescription(List<String> description) {
    super.debugFillDescription(description);
    description.add(
        'minExtent: $minExtent, extent: $extent, maxExtent: $maxExtent, initialExtent: $initialExtent');
  }
}

class _DraggableSheetExtent {
  _DraggableSheetExtent({
    @required this.minExtent,
    @required this.maxExtent,
    @required this.initialExtent,
    @required this.animationController,
    @required VoidCallback listener,
    this.onDragPositionChange,
  }) {
    assert(minExtent != null);
    assert(maxExtent != null);
    assert(initialExtent != null);
    assert(minExtent >= 0);
    assert(maxExtent <= 1);
    assert(minExtent <= initialExtent);
    assert(initialExtent <= maxExtent);
    availablePixels = double.infinity;
    positionType = DragableScrollPositionType.initial;
    _currentExtent = ValueNotifier<double>(initialExtent);
    _currentExtent.addListener(listener);
    animationController.addListener(() {
      _currentExtent.value = animationController.value;
    });
    ignoreMinExtend = minExtent == initialExtent;
  }

  final double stickyThreshold = 0.05;
  final double minExtent;
  final double maxExtent;
  final double initialExtent;
  final AnimationController animationController;
  final OnDragPositionChange onDragPositionChange;
  DragableScrollPositionType positionType;
  ValueNotifier<double> _currentExtent;
  double availablePixels;
  bool ignoreMinExtend;

  bool get isAtMin => minExtent >= _currentExtent.value;
  bool get isAtMax => maxExtent <= _currentExtent.value;

  set currentExtent(double value) {
    assert(value != null);
    final double targetExtend = value.clamp(minExtent, maxExtent) as double;
    animationController.animateTo(
      targetExtend,
      duration: Duration.zero,
    );
  }

  double get currentExtent => _currentExtent.value;

  double get additionalMinExtent => isAtMin ? 0.0 : 1.0;
  double get additionalMaxExtent => isAtMax ? 0.0 : 1.0;

  animateTo(
    DragableScrollPositionType type,
    ScrollController scrollController,
  ) async {
    if (positionType != type) {
      onDragPositionChange?.call(type);
    }
    positionType = type;
    if (positionType == DragableScrollPositionType.min && ignoreMinExtend)
      positionType = DragableScrollPositionType.initial;
    final double targetExtend =
        positionType == DragableScrollPositionType.initial
            ? initialExtent
            : positionType == DragableScrollPositionType.max
                ? maxExtent
                : minExtent;
    await animationController.animateTo(
      targetExtend,
      duration: animationController.duration,
      curve: Curves.easeInOut,
    );
    if (positionType != DragableScrollPositionType.max)
      scrollController.jumpTo(0);
  }

  void addPixelDelta(double delta, BuildContext context) {
    if (availablePixels == 0) return;
    currentExtent += delta / availablePixels * maxExtent;
    DraggableScrollNotification(
      minExtent: minExtent,
      maxExtent: maxExtent,
      extent: currentExtent,
      initialExtent: initialExtent,
      context: context,
    ).dispatch(context);
  }

  DragableScrollPositionType get stickyPositionType {
    if (currentExtent > maxExtent) return DragableScrollPositionType.max;
    if (currentExtent < minExtent)
      return ignoreMinExtend
          ? DragableScrollPositionType.initial
          : DragableScrollPositionType.min;

    double diffExtent = 0.0;

    if (positionType == DragableScrollPositionType.max) {
      diffExtent = maxExtent - currentExtent;
      return diffExtent < stickyThreshold
          ? DragableScrollPositionType.max
          : currentExtent > initialExtent
              ? DragableScrollPositionType.initial
              : DragableScrollPositionType.min;
    } else if (positionType == DragableScrollPositionType.initial) {
      diffExtent = initialExtent - currentExtent;
      if (diffExtent < 0) {
        return diffExtent.abs() < stickyThreshold
            ? DragableScrollPositionType.initial
            : DragableScrollPositionType.max;
      } else {
        return diffExtent < stickyThreshold
            ? DragableScrollPositionType.initial
            : DragableScrollPositionType.min;
      }
    } else {
      diffExtent = (minExtent - currentExtent).abs();
      return diffExtent < stickyThreshold
          ? DragableScrollPositionType.min
          : currentExtent < initialExtent
              ? DragableScrollPositionType.initial
              : DragableScrollPositionType.max;
    }
  }
}

class _DraggableScrollViewState extends State<DraggableScrollView>
    with SingleTickerProviderStateMixin {
  DraggableScrollController _scrollController;
  _DraggableSheetExtent _extent;
  AnimationController _animationController;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      value: widget.initialChildSize,
      lowerBound: widget.minChildSize,
      upperBound: widget.maxChildSize,
      vsync: this,
      duration: Duration(milliseconds: 100),
    );
    _extent = _DraggableSheetExtent(
      minExtent: widget.minChildSize,
      maxExtent: widget.maxChildSize,
      initialExtent: widget.initialChildSize,
      animationController: _animationController,
      listener: () {
        setState(() {});
      },
      onDragPositionChange: widget.onDragPositionChange,
    );
    _scrollController = DraggableScrollController(extent: _extent);
  }

  @override
  Widget build(BuildContext context) {
    return NotificationListener<ScrollNotification>(
      child: NotificationListener<ScrollEndNotification>(
        child: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints constraints) {
            _extent.availablePixels =
                widget.maxChildSize * constraints.biggest.height;
            final Widget sheet = FractionallySizedBox(
              heightFactor: _extent.currentExtent,
              child: widget.builder(context, _scrollController),
              alignment: Alignment.bottomCenter,
            );
            return SizedBox.expand(child: sheet);
          },
        ),
        onNotification: (notification) {
          _extent.animateTo(_extent.stickyPositionType, _scrollController);
          widget.onScroll?.call(notification.metrics.pixels.toInt());
          return true;
        },
      ),
      onNotification: (notification) {
        // if (widget.onScroll != null &&
        //     _extent.positionType == DragableScrollPositionType.max)
        widget.onScroll?.call(notification.metrics.pixels.toInt());
        return true;
      },
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
}

class DraggableScrollController extends ScrollController {
  DraggableScrollController({
    double initialScrollOffset = 0.0,
    String debugLabel,
    @required this.extent,
  })  : assert(extent != null),
        super(
          debugLabel: debugLabel,
          initialScrollOffset: initialScrollOffset,
        );

  final _DraggableSheetExtent extent;

  @override
  _DraggableScrollPosition createScrollPosition(
    ScrollPhysics physics,
    ScrollContext context,
    ScrollPosition oldPosition,
  ) {
    return _DraggableScrollPosition(
      physics: physics,
      context: context,
      oldPosition: oldPosition,
      extent: extent,
    );
  }

  @override
  void debugFillDescription(List<String> description) {
    super.debugFillDescription(description);
    description.add('extent: $extent');
  }
}

class _DraggableScrollPosition extends ScrollPositionWithSingleContext {
  _DraggableScrollPosition({
    @required ScrollPhysics physics,
    @required ScrollContext context,
    double initialPixels = 0.0,
    bool keepScrollOffset = true,
    ScrollPosition oldPosition,
    String debugLabel,
    @required this.extent,
  })  : assert(extent != null),
        super(
          physics: physics,
          context: context,
          initialPixels: initialPixels,
          keepScrollOffset: keepScrollOffset,
          oldPosition: oldPosition,
          debugLabel: debugLabel,
        );

  VoidCallback _dragCancelCallback;
  final _DraggableSheetExtent extent;
  bool get listShouldScroll => pixels > 0.0;

  @override
  bool applyContentDimensions(double minScrollExtent, double maxScrollExtent) {
    return super.applyContentDimensions(
      minScrollExtent - extent.additionalMinExtent,
      maxScrollExtent + extent.additionalMaxExtent,
    );
  }

  @override
  void applyUserOffset(double delta) {
    if (!listShouldScroll &&
        (!(extent.isAtMin || extent.isAtMax) ||
            (extent.isAtMin && delta < 0) ||
            (extent.isAtMax && delta > 0))) {
      extent.addPixelDelta(-delta, context.notificationContext);
    } else {
      super.applyUserOffset(delta);
    }
  }

  @override
  void goBallistic(double velocity) {
    if (velocity == 0.0 ||
        (velocity < 0.0 && listShouldScroll) ||
        (velocity > 0.0 && extent.isAtMax)) {
      super.goBallistic(velocity);
      return;
    }
    // Scrollable expects that we will dispose of its current _dragCancelCallback
    _dragCancelCallback?.call();
    _dragCancelCallback = null;

    // The iOS bouncing simulation just isn't right here - once we delegate
    // the ballistic back to the ScrollView, it will use the right simulation.
    final Simulation simulation = ClampingScrollSimulation(
      position: extent.currentExtent,
      velocity: velocity,
      tolerance: physics.tolerance,
    );

    final AnimationController ballisticController =
        AnimationController.unbounded(
      debugLabel: objectRuntimeType(this, '_DraggableScrollViewPosition'),
      vsync: context.vsync,
    );
    double lastDelta = 0;
    void _tick() {
      final double delta = ballisticController.value - lastDelta;
      lastDelta = ballisticController.value;
      extent.addPixelDelta(delta, context.notificationContext);
      if ((velocity > 0 && extent.isAtMax) ||
          (velocity < 0 && extent.isAtMin)) {
        // Make sure we pass along enough velocity to keep scrolling - otherwise
        // we just "bounce" off the top making it look like the list doesn't
        // have more to scroll.
        velocity = ballisticController.velocity +
            (physics.tolerance.velocity * ballisticController.velocity.sign);
        super.goBallistic(velocity);
        ballisticController.stop();
      } else if (ballisticController.isCompleted) {
        super.goBallistic(0);
      }
    }

    ballisticController
      ..addListener(_tick)
      ..animateWith(simulation).whenCompleteOrCancel(
        ballisticController.dispose,
      );
  }

  @override
  Drag drag(DragStartDetails details, VoidCallback dragCancelCallback) {
    // Save this so we can call it later if we have to [goBallistic] on our own.
    _dragCancelCallback = dragCancelCallback;
    return super.drag(details, dragCancelCallback);
  }
}
