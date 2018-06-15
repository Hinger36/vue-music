
const apiMusic = {
  loginCellphone: '/api/login/cellphone',  // 手机登陆
  userPlaylist: '/api/user/playlist',  // 获取用户歌单
  playlistDetail: '/api/playlist/detail',  // 获取歌单详情
  musicUrl: '/api/music/url', // 获取音乐url
  search: '/api/search',  // 搜素音乐
  lyric: '/api/lyric',  // 获取歌词
  comment: '/api/comment',  // 获取评论
  album: '/api/album', //  获取专辑内容
  artists: '/api/artists',  // 获取歌手单曲列表
  artistAlbum: '/api/artist/album',  // 获取歌手专辑列表
  artistDesc: '/api/artist/desc', //  获取歌手信息
  recommendResource: '/api/recommend/resource', // 获取每日推荐歌单（用户级）
  recommendSongs: '/api/recommend/songs',  // 获取每日推荐歌曲（用户级）
  personalFm: '/api/personal_fm', // 私人FM(用户级)
  dailySignin: '/api/daily_signin',  // 签到(用户级)
  likeMusic: '/api/like', // 添加喜欢的音乐(用户级)
  fmTrash: '/api/fm_trash', // 将音乐从私人FM中移除至垃圾桶
  topPlaylist: '/api/top/playlist', //  歌单(网友精选歌单)
  newAlbum: '/api/top/albums',  // 新碟上架
  topArtists: '/api/top/artists', //  热门歌手
  topList: '/api/top/list', //  音乐排行榜
  personalized: '/api/personalized', //  推荐歌单
  privatecontent: '/api/personalized/privatecontent',  // 独家放送
  personalizedMv: '/api/personalized/mv',  // 推荐MV
  newSong: '/api/personalized/newsong', // 推荐音乐
  djProgram: '/api/personalized/djprogram',  // 推荐电台
  mv: '/api/mv', // 获取mv数据
  simiMv: '/api/simi/mv', // 获取相似mv
  mvComment: '/api/comment/mv',  // 获取mv评论
  playlistComment: '/api/comment/playlist',  // 获取歌单评论
  albumComment: '/api/comment/album',  // 获取专辑评论
  artistMv: '/api/artist/mv'  // 获取歌手MV
};

export default apiMusic
