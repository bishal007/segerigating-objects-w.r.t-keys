const obj = [{
	key: 'S1',
  data: 'something'
},{
	key: 'S2',
  data: 'anything'
},{
	key: 'S1',
  data: 'something'
},{
	key: 'S1',
  data: 'something'
},{
	key: 'S3',
  data: 'everything'
},{
	key: 'S3',
  data: 'something'
},{
	key: 'S2',
  data: 'anything'
},{
	key: 'S1',
  data: 'something'
},{
	key: 'S3',
  data: 'everything'
}]

const output = {};

obj.forEach((item)=>{
	if(output[item.key]){
  //key is available
  output[item.key].push(item);
  }else{
  //key is not available
  output[item.key] = [item]
  }
})

console.log(output);