
// 封装storage
var storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key,value){
     return   localStorage.getItem(key,JSON.parse(value))
    },
    remove(key){
        localStorage.removeItem(key)
    }
}
export default storage;