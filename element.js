/*
* Date: 2015-09-24
* 使用jquery扩展小方法(方便自己使用)
*/
$(function(){
   	$.fn.extend({
         //全选||全不选
         // $('.all-click').allCheck()
   		allCheck:function(){
   			this.prop('checked')?this.prop('checked',false):this.prop('checked',true);
   		},
         //反选
         // $('.reverse-click').reverseCheck
   		reverseCheck:function(){
   			this.each(function(){
   				$(this).allCheck()
   			})
   		}
   	})
})