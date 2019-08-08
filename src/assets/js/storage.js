var local_storage = {
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    remove(){
        localStorage.removeItem(key);
    },
    clear(){
        localStorage.clear() //清除 localStorage 对象所有的项。
    }
 
};
var session_storage = {
    set(key,value){
        sessionStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(sessionStorage.getItem(key));
    },
    remove(){
        sessionStorage.removeItem(key);
    },
    clear(){
        sessionStorage.clear() //清除 sessionStorage 对象所有的项。
    }
 
};
export default {
    local_storage: local_storage,
    session_storage: session_storage
};