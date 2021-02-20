import fillzero from './fillzero.js'
export default time => {
  let d = new Date();
  d.setTime(time);
  
  return `xxxx年xx月xx日 xx:xx:${fillzero(d.getSeconds())}`
}