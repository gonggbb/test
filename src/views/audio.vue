<template>
        <div>
           <!--music：当前播放的音乐。 list：播放列表 ：showlrc：是否显示歌词-->
           <aplayer :music="audio[0]" :list="audio"  :showlrc="true"></aplayer>
        </div>
</template>
<script>
import aplayer from "vue-aplayer";  
export default {
  name:"audio",
  components: { aplayer },
  data() {
    return {
       // 音频列表
        audio:  [
            {
                title: '海阔天空 (1993劲歌金曲季选现场)',
                artist: 'Beyond',
                url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_155169760&response=res&type=convert_url&',
                cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
                lrc: '[00:0.34]海阔天空 (1993劲歌金曲季选现场) - Beyond[00:3.09]今天我寒夜里看雪飘过[00:9.17]怀着冷却了的心窝飘远方[00:15.24]风雨里追赶雾里分不清影踪[00:21.49]天空海阔你与我可会变谁没在变[00:27.96]多少次迎着冷眼与嘲笑[00:34.36]从没有放弃过心中的理想[00:40.35]一刹那恍惚若有所失的感觉[00:46.51]不知不觉已变淡心里爱谁明白我[00:53.38]原谅我这一生不羁放纵爱自由[01:00.55]也会怕有一天会跌倒oh no[01:11.]背弃了理想谁人都可以[01:21.52]哪会怕有一天只你共我[01:45.95]今天我寒夜里看雪飘过[01:56.95]怀着冷却了的心窝飘远方[01:66.68]风雨里追赶雾里分不清影踪[01:77.32]天空海阔你与我可会变谁没在变[01:88.7]原谅我这一生不羁放纵爱自由[02:00.28]也会怕有一天会跌倒oh no[02:10.7]背弃了理想谁人都可以[02:21.32]哪会怕有一天只你共我oh yeah [02:38.05]仍然自由自我永远高唱我歌走遍千里[02:57.02]原谅我这一生不羁放纵爱自由[02:68.53]也会怕有一天会跌倒oh no[02:79.08]背弃了理想谁人都可以[02:89.67]哪会怕有一天只你共我[03:00.18]原谅我这一生不羁放纵爱自由oh yeah [03:10.68]也会怕有一天会跌倒oh [03:21.27]背弃了理想谁人都可以wow [03:31.67]哪会怕有一天只你共我',
            },
            {
                title:'新贵妃醉酒',
                artist: '李玉刚',
                url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_56060416&response=res&type=convert_url&',
                pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg" ,
                lrc: '[00:0.0]新贵妃醉酒 - 李玉刚[00:11.3]词：胡力[00:22.6]曲：胡力[00:33.9]那一年的雪花飘落梅花开枝头[00:39.63]那一年的华清池旁留下太多愁[00:45.28]不要说谁是谁非感情错与对[00:51.15]只想梦里与你一起再醉一回[00:56.21]金雀钗玉搔头是你给我的礼物[01:03.43]霓裳羽衣曲几番轮回为你歌舞[01:13.37]剑门关是你对我深深的思念[01:22.83]马嵬坡下愿为真爱魂断红颜[01:35.68]爱恨就在一瞬间[01:51.65]举杯对月情似天[01:55.35]爱恨两茫茫[01:64.88]问君何时恋[01:73.53]菊花台倒影明月[01:83.32]谁知吾爱心中寒[01:93.93]醉在君王怀[02:03.47]梦回大唐爱[02:56.62]金雀钗玉搔头是你给我的礼物[02:66.08]霓裳羽衣曲几番轮回为你歌舞[02:75.43]剑门关是你对我深深的思念[02:84.9]马嵬坡下愿为真爱魂断红颜[02:95.7]爱恨就在一瞬间[03:04.4]举杯对月情似天[03:15.33]爱恨两茫茫[03:24.87]问君何时恋[03:33.25]菊花台倒影明月[03:42.78]谁知吾爱心中寒[03:53.17]醉在君王怀[03:62.6]梦回大唐爱[03:71.7]爱恨就在一瞬间[03:80.8]举杯对月情似天[03:91.37]爱恨两茫茫[03:99.77]问君何时恋[04:09.47]菊花台倒影明月[04:19.55]谁知吾爱心中寒[04:29.33]醉在君王怀[04:39.45]梦回大唐爱',
            },
            {
                title:'纸短情长',
                artist: '烟把儿乐队',
                url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_14607982&response=res&type=convert_url&',
                pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E4%BB%A5%E5%AE%B6%E4%B9%8B%E5%90%8D.jpg', // prettier-ignore
                lrc: '[00:0.13]纸短情长 - 烟把儿乐队[00:1.57]词：言寺[00:2.13]曲：言寺[00:2.7]编曲：张梓洋[00:3.57]制作人：张梓洋[00:25.18]你陪我步入蝉夏 越过城市喧嚣[00:32.48]歌声还在游走 你榴花般的双眸[00:38.17]不见你的温柔 丢失花间欢笑[00:44.16]岁月无法停留 流云的等候[00:53.36]我真的好想你 在每一个雨季[00:58.7]你选择遗忘的 是我最不舍的[01:07.8]纸短情长啊 道不尽太多涟漪[01:17.35]我的故事都是关于你呀[01:34.38]怎么会爱上了他 并决定跟他回家[01:42.32]放弃了我的所有我的一切无所谓[01:51.07]纸短情长啊 诉不完当时年少[01:59.53]我的故事还是关于你啊[02:31.55]你陪我步入蝉夏 越过城市喧嚣[02:40.08]歌声在游走 你榴花般的双眸[02:47.97]不见你的温柔 丢失花间欢笑[02:56.15]岁月无法停留 流云的等候[02:82.67]我真的好想你 在每一个雨季[02:90.5]你选择遗忘的 是我最不舍的[02:98.32]纸短情长啊 道不尽太多涟漪[03:07.38]我的故事都是关于你呀[03:14.5]怎么会爱上了他 并决定跟他回家[03:22.13]放弃了我的所有我的一切无所谓[03:30.98]纸短情长啊 诉不完当时年少[03:39.6]我的故事还是关于你啊[03:74.72]我真的好想你 在每一个雨季[03:82.2]你选择遗忘的 是我最不舍的[03:91.08]纸短情长啊 道不尽太多涟漪[03:99.52]我的故事都是关于你呀[04:06.33]怎么会爱上了他 并决定跟他回家[04:14.12]放弃了我的所有我的一切无所谓[04:23.03]纸短情长啊 诉不完当时年少[04:31.5]我的故事还是关于你啊[04:39.48]我的故事还是关于你啊',
            },
            {
                title:'Fade(纯音乐)',
                artist: 'Alan Walker',
                url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_87839608&response=res&type=convert_url&',
                pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/-1992181439.jpg" ,
                lrc: '[00:00.00] 暂无歌词',
            },
        ],
    }
  },
}
</script>
<style lang="scss" scoped>

</style>