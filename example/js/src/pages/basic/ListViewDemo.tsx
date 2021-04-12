import Thresh, {
  Widget,
  basicWidgets,
  ui
} from 'thresh-lib'
import { Colors } from '../../config'

const {
  Page,
  AppBar,
  ListView,
  SwipeActionsView,
  Container,
  Text,
  Image,
  Icon
} = basicWidgets

export default class ListViewDemo extends Widget <any, any> {
  infos = [
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-c8d3183c55365626.jpeg',
      text: '其实对于架上绘画十九世纪四十年代，西方就说已死亡了，但是现实是没有死亡反而大有复兴的趋势。同样作为书法中最传统的楷书，也正在受到大众的喜爱。比如这位女裁缝刘智莉，没有任何背景，靠写小楷上央视当劳模，老百姓就喜欢她的小楷。'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-8d192aa6a46409f1.jpeg',
      text: '尤其让人感动的是，刘智莉把农村老家的房子改成了工会的“刘智莉劳模工作室”和文广局的“文化大院”，离乡不忘本，作为刘智莉给乡亲们解忧帮困的场所。“做好自己的事，只要有利他人和社会的事，就去做。”这是这些年来，刘智莉秉持的做人原则，也是师承恩师宁书纶“书法之道先做人”的教诲。'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-0e60846632d72d64.jpeg',
      text: '刘智莉是天津市静海县杨成庄乡杨成庄村的一位农村女裁缝。三十六年前没考上大学，到一家乡办服装厂做缝纫工。因为喜欢写字，午休时间，她骑自行车到离厂里3里外的乡文化站拜师求教。花了7个月的工资参加书法培训。每到面授的日子，她凌晨4点起床，摸黑骑车往返70公里路，到南开大学上课。'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-2bfeb5575de9aa75.jpeg',
      text: '刘智莉的苦学精神感动到了书法辅导老师、著名书法家宁书纶，并收她为徒。在老师的经心指导下，刘智莉从欧阳询的《九成宫醴泉铭》开始临习，再临《化度寺》《皇甫君碑》，再到王羲之的小楷《洛神赋十三行》以及赵孟、钟绍京等。每年练字的废纸就要堆出4米多高。三十六年来练字的废纸堆要达150米高了。她的小楷越写越好，网友称赞她的小楷堪比王羲之。'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-32f9cb85487712f0.jpeg',
      text: '后来乡办企业不景气，刘智莉就回家自己做裁缝。成家后生活所迫，每年腊月廿至廿九到集市上去卖春联，卖了九年春联，因天津电视台、《天津日报》《今晚报》等媒体的报道，刘智莉成了当地有名的小人物了，不时有附近的乡亲找她帮忙。学书法先学做人，刘智莉时刻牢记老师的教导，她能帮尽力帮，不能帮的她找媒体。二零零二年，刘智莉为了帮助一位单身母亲遇到的困难，写信给央视《半边天》栏目，也就是这一次节目组来采访报道，被刘智莉热衷书法乐于助人，自强不息的精神感动了。节目主持人张越对她说：“你的善良和勤奋，一定会成就你。”'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-7c8a3f303e012c44.jpeg',
      text: '过了一年，《半边天》专程为刘智莉做了一期专访。节目播出后，在全国引起了强烈反响。杭州一位姓梁的老先生很喜欢刘智莉的小楷，辗转找到了她，打电话给她说：“你这双手就应该写字，不应该再做裁缝了”。也从这一年开始，刘智莉给梁先生用小楷抄写东西，梁先生连续两年给她买下了多达几十万的书法作品。'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-aaff222a4d61b9cd.jpeg',
      text: '到了二零零五年，刘智莉在第二届天津书坛新人作品展中获了奖。从此，开始有人来买她的字。随着举办了几场展览和几次获奖，刘智莉的名气越来越大，来买她的字人也多起来了。二零零六年，刘智莉因为乐于帮助乡亲，作为农民界别的优秀代表当选静海县政协委员，并当选了劳模。二零零八年，刘智莉当选天津市劳动模范，二零一二年当选天津市政协委员，因为她的书法成就，成为文艺界别的委员。'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-921dd03ae5716a9e.jpeg',
      text: '就是这样一位从传统书法一步一个脚印，苦学苦练，扎扎实实走出来的女书法家，就因为她写的是楷书，也曾被专家认为没有什么艺术性。相反，很多网友却认为，这是专家对草根高手的羡慕嫉妒恨，以贬低别人来维护自己的那点自尊。不过，现实是最好的证明，如今刘智莉不仅靠写书法，在镇上了买了房子，两个孩子也培养成了大学生。她的书法还从国内走向国外，作品先后被新加坡、美国、加拿大的国际友人及国内朋友收藏。'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-e576a5161f13c2bf.jpeg',
      text: '不知从什么时候起，我们发现走传统的路子，都会被一些专家看不起。比如中国写实画派的领军人物冷军，他的绘画水平绝对是天下无敌，因为走的是传统写实的这条路，所以对他的作品评价总是缺乏公正，说什么超写实就是停留在绘画的技艺上，内容没有现代前卫有创作性，是照片的复制没有多少艺术性。就连很多网友也觉得现在都什么年代了，有高清数码相机，还用得了这么费劲花个一年半载去画吗？'
    },
    {
      image: 'https://upload-images.jianshu.io/upload_images/4741933-8841549061978867.jpeg',
      text: '绘画界如此，书法圈也是，你写个狂草就不得了，写个行书也总有掌声，如果你还是在写楷书，哪怕你的小楷、蝇头小楷写得再好，专家们就会说一句，没有变化，没有艺术性，是“台阁体”“馆阁体”，反而那些搞怪的乱书、吼书、盲书、射书、网书、竹书等丑书却大有市场。'
    }
  ]

  $openedItem

  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      loading: false,
      contents: this.getMore()
    }
  }

  getMore () {
    return this.infos.map(item => ({
      ...item,
      id: Math.random(),
      like: false
    }))
  }

  renderList () {
    const { contents } = this.state
    return contents.map((item, index) => (
      <ListItem
        key={item.id}
        {...item}
        index={index}
        onDelete={() => {
          if (this.$openedItem) {
            this.$openedItem.closeActions()
            this.$openedItem = null
          }
          contents.splice(index, 1)
          this.setState({ contents })
        }}
        onOpen={(ref) => {
          if (this.$openedItem && this.$openedItem !== ref) this.$openedItem.closeActions()
          this.$openedItem = ref
        }}
      />
    ))
  }

  render () {
    return (
      <Page
        appBar={
          <AppBar title="ListView 列表组件" />
        }
        backgroundColor={Colors.Pagebg}
        onShow={() => {
          this.infos.reverse()
          this.setState()
        }}
      >
        <ListView
          refreshColor={Colors.White}
          refreshBackgroundColor={Colors.Primary}
          onRefresh={() => {
            return new Promise(resolve => {
              setTimeout(() => {
                this.setState({
                  page: 1,
                  contents: [ ...this.getMore() ]
                })
                resolve()
              }, 3000)
            })
          }}
          onLoadMore={() => {
            const { page } = this.state
            // if (page >= 5) return Promise.resolve()
            this.setState({
              loading: true,
            })
            return new Promise(resolve => {
              setTimeout(() => {
                const { contents } = this.state
                this.setState({
                  page: page + 1,
                  loading: false,
                  contents: [ ...contents, ...this.getMore() ]
                })
                resolve()
              }, 100)
            })
          }}
        >
          {this.renderList()}
          <Container margin={10} alignItems="center">
            {
              this.state.loading
                ? <Icon type="loading" />
                // : <Text>{this.state.page >= 5 ? '没有更多了' : '上拉加载更多'}</Text>
                : <Text>上拉加载更多</Text>
            }
          </Container>
        </ListView>
      </Page>
    )
  }
}

class ListItem extends Thresh.Widget <any, any> {
  constructor (props) {
    super(props)
    this.state = {
      like: props.like
    }
  }

  $ref

  getActionsConfig () {
    const { index } = this.props
    if (index % 3 === 0) return {}
    if (index % 3 === 1) return {
      swipeMaxDistance: ui.rpx(100),
      actions: [
        <Container
          width={ui.rpx(100)} 
          backgroundColor={Colors.Primary}
          alignItems="center"
          justifyContent="center"
        >
          <Text color={Colors.White}>关闭</Text>
        </Container>
      ]
    }
    if (index % 3 === 2) return {
      swipeMaxDistance: ui.rpx(200),
      actions: [
        <Container
          width={ui.rpx(100)} 
          backgroundColor={Colors.Primary}
          alignItems="center"
          justifyContent="center"
        >
          <Text color={Colors.White}>关闭</Text>
        </Container>,
        <Container
          width={ui.rpx(100)}
          backgroundColor={Colors.Red}
          alignItems="center"
          justifyContent="center"
          onTap={() => { this.props.onDelete() }}
        >
          <Text color={Colors.White}>删除</Text>
        </Container>
      ]
    }
  }

  render () {
    const { image, text, index } = this.props
    const { like } = this.state
    return (
      <SwipeActionsView
        ref={r => {
          if (!this.$ref) this.$ref = r
        }}
        margin={5}
        borderRadius={ui.rpx(20)}
        {...this.getActionsConfig()}
        onActionsOpen={() => {
          this.props.onOpen(this.$ref)
        }}
        content={(
          <Container alignItems="center" row backgroundColor={Colors.White} padding={10}>
            <Image
              src={image}
              width={100}
              height={100}
            />
            <Text width={30} align="center">{index + 1}</Text>
            <Text flex={1} lineHeight={1.5}>
              {text}
            </Text>
            <Icon
              type="bookmark"
              color={like ? Colors.Primary : Colors.Lightgray }
              size={24}
              onTap={() => {
                this.setState({
                  like: !like
                })
              }}
            />
          </Container>
        )}
      />
    )
  }
}
