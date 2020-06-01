<template>
  <div id="login">
    <div>
      <span>用户名</span>
      <input type="text" v-model="username" value="" />
      <span>密码</span>
      <input type="password" v-model="password" value="" />
      <button v-on:click="login">点击登录呀</button>
    </div>
    <div>
      <br />
      <button v-on:click="p_dict">p_dict测试</button>
    </div>
    <div>
      <br />
      <button v-on:click="s_dict">s_dict测试</button>
    </div>
    <div>
      <br />
      <button v-on:click="findAll">findAll</button>
    </div>
    <!-- S_FINDALL -->
    <div>
      <br />
      <button v-on:click="use_del">USE_DEL测试</button>
    </div>
    <div>
      <br />
      <button v-on:click="s_findAll">S_FINDALL测试</button>
    </div>
  </div>
  
</template>

<script>
import { LOGIN_API, P_DICT_API, S_DICT_API,FINDALL ,S_FINDALL,USE_DEL} from "@/api/login/login";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      console.log("this is login");
      console.log("username" + this.username);
      console.log("password" + this.password);
      console.log(LOGIN_API(this.username, this.password));

      LOGIN_API(this.username, this.password)
        .then(res => {
          console.log("---------login success----");
          console.log(res);
        })
        .catch(err => {
          console.log("---------login err----");
          console.log(err);
        });
    },
    p_dict: function() {
      console.log("this is p_dict----------");
      P_DICT_API("医生职称", "")
        .then(res => {
          console.log("---------success----");
          console.log(res);
        })
        .catch(err => {
          console.log("---------err----");
          console.log(err);
        });
    },
    s_dict: function() {
      let data = {
        sDictCode: 1,
        sDictName: "专家",
        pDictId: 1000,
        pDictCode: "PT0001",
        pDictName: "医生职称",
        state: 0,
        dictNote: "",
        superiorId: ""
      }
      S_DICT_API(data).then(res => {
          console.log("---------login success----");
          console.log(res);
        })
        .catch(err => {
          console.log("---------login err----");
          console.log(err);
        });
    },
    findAll : function (){
      console.log("---------findAll running----");
        FINDALL().then(res => {
            console.log("---------findAll success----");
            console.log(res);
          })
          .catch(err => {
            console.log("---------findAll err----");
            console.log(err);
          });
    },
    // http://192.168.1.101:8080/houde/s_dict/findAll
    s_findAll : function (){
      console.log("---------findAll running----");
        S_FINDALL().then(res => {
            console.log("---------findAll success----");
            console.log(res);
          })
          .catch(err => {
            console.log("---------findAll err----");
            console.log(err);
          });
    },
    use_del :function(){
      let data =['admin2']
      USE_DEL(data).then(res => {
            console.log("---------findAll success----");
            console.log(res);
          })
          .catch(err => {
            console.log("---------findAll err----");
            console.log(err);
          });
    }
  }
}
</script>

<style></style>
