(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b70":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"hot"},[s("HotSongList",{attrs:{HotPlaylist:t.HotPlaylist,updateTime:t.updateTime,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(i){return t.$emit("update:music",i)},"update:playlist":function(i){return t.$emit("update:playlist",i)}}})],1)},n=[],e=(s("a15b"),s("d81d"),s("fb6a"),s("b0c0"),s("d3b7"),function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"nav"},[s("div",{staticClass:"banner"},[s("div",{staticClass:"shade"}),s("div",{staticClass:"hotopct"},[s("div",{staticClass:"hoticon"}),s("p",[t._v("更新日期："+t._s(t.updateTime))])])]),s("div",{staticClass:"musiclist"},[s("ul",t._l(t.HotPlaylist,(function(i,a){return s("HotSongListItem",{key:a,attrs:{item:i,index:a,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(i){return t.$emit("update:music",i)},"update:playlist":function(i){return t.$emit("update:playlist",t.HotPlaylist)}}})})),1)])])}),u=[],o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"item",on:{click:function(i){t.$emit("update:music",{item:t.item,index:t.index}),t.$emit("update:playlist")}}},[s("div",{staticClass:"sort"},[s("span",[t._v(" "+t._s(t.index+1>9?t.index+1:"0"+(t.index+1))+" ")])]),s("div",{staticClass:"info"},[s("h5",[t._v(" "+t._s(t.item.name)+" ")]),s("p",[s("span",{staticClass:"sq"}),s("span",[t._v(" "+t._s(t.item.name)+" ")]),s("span",{staticClass:"zuozhe"},[t._v(" -"+t._s(t.item.song.artists[0].name)+" ")])])]),s("div",{staticClass:"icon"},[t.currentMusic&&t.currentMusic.id===t.item.id?s("span",{staticClass:"playing",class:{paused:t.paused}},[s("i"),s("i",{staticClass:"one"}),s("i",{staticClass:"two"}),s("i")]):s("span",{staticClass:"play"})])])},c=[],l={props:["item","index","currentMusic","paused"]},r=l,d=(s("c71f"),s("2877")),p=Object(d["a"])(r,o,c,!1,null,null,null),m=p.exports,f={props:["HotPlaylist","updateTime"],components:{HotSongListItem:m}},v=f,h=(s("22a0"),Object(d["a"])(v,e,u,!1,null,"268d58f5",null)),y=h.exports,C={components:{HotSongList:y},data:function(){return{HotPlaylist:[],updateTime:0}},methods:{CurentTime:function(t){var i=new Date(t),s=i.getMonth()+1,a=i.getDate();return s+"月"+a+"日"}},created:function(){var t=this;this.$root.isShowLoading=!0,this.axios.get("/top/list?idx=1").then((function(i){t.updateTime=t.CurentTime(i.data.playlist.updateTime),t.$root.isShowLoading=!0,t.axios.get("/song/detail?ids="+i.data.playlist.trackIds.slice(0,20).map((function(t){return t.id})).join()).then((function(i){var s=i.data.songs;for(var a in s){var n={};n.name=s[a].name,n.id=s[a].id,n.picUrl=s[a].al.picUrl,n.song={artists:s[a].ar},n.al=s[a].al.name,t.HotPlaylist.push(n)}})).finally((function(){t.$root.isShowLoading=!1}))})).finally((function(){t.$root.isShowLoading=!1}))}},g=C,$=Object(d["a"])(g,a,n,!1,null,null,null);i["default"]=$.exports},"22a0":function(t,i,s){"use strict";s("c322")},"70b9":function(t,i,s){},c322:function(t,i,s){},c71f:function(t,i,s){"use strict";s("70b9")}}]);
//# sourceMappingURL=about.36160ac5.js.map