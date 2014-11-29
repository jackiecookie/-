/**
 * sea一个简单的循环依赖插件
 * @authors  wspandihai
 * @date    2014-11-29 20:06:18
 */

var traceds=[];
seajs.on('load',function(uris){
	for (var i = 0,len=uris.length; i <len ; i++) {
		var m=seajs.Module.get(uris[i])
		seajs.breakCycle(m,traceds)
	};
	
})

seajs.breakCycle=function(mod, traced){
	traced[mod.uri]=true;
	var depurls=mod.resolve();
	for (var i = 0,len=depurls.length; i < len; i++) {
		var depm=seajs.Module.get(depurls[i]);
		if(depm&&depm.status<seajs.Module.STATUS.LOADED){
			
			if(traced[depurls[i]]){
				depm.onload();
			}else{
				seajs.breakCycle(depm,traced)
			}
		}
	};
}