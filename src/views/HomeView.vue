<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 
  <div class="title  mb-3">
    <h2>くまさんがパスワードを作るよ</h2>
  </div>
  <div class="mb-3"><img src="@/assets/xxxhdpi.png" alt=""></div>
  <div class="container  mb-3">  
    <div class="col-12 mb-3">
      <input type="test" v-model="text" class="form-control-inline col-8" placeholder="Please click Generate Password"/>
    </div>
    <!-- <div class="form-group mx-5"> -->
    <div class="form-group mb-3">
      <!-- <button @click="show()" class="btn btn-primary">show</button>  -->
      <button @click="chanege()" class="btn btn-success mx-3">Generate Password</button>
      <button @click="copyClipboard()" class="btn btn-primary mx-3">copy</button>
    </div>

    <div class="form-group  mx-5 mb-3">
      <input class="col-4" ref="passwordLength" type="range" min="8" max="30" step="1" v-model="passLen">
    </div>
    <div class="col-12 mb-3">
      <p>パスワード文字数は<span id="current-value">{{ text2 }}</span>だよ</p>
    </div>

    <div class="form-group mx-5">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" checked disabled="disabled">
          <label class="form-check-label" for="flexCheckDefault">英数含む</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" checked v-model="checkSym">
          <label class="form-check-label" for="flexCheckDefault">記号含む</label>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      text: "",
      passLen: 15,
      checkSym: true
    };
  },
  methods: {
    // show: function () {
    //   alert(this.text);
    // },
    chanege: function () {
      const targetCheckSymbol = this.checkSym;
      // console.log(this.passLen);
      // console.log(this.checkSym);
      if (targetCheckSymbol){
        this.text = createPassword2(this.passLen);
        this.text2 = this.passLen;

      } else {
        this.text = createPassword(this.passLen);
        this.text2 = this.passLen;
      }
    },
    copyClipboard: function () {
      if (this.text) {
        // 空で無い
        navigator.clipboard.writeText(this.text);
        const copytext = this.text + "をクリップボードへコピーしたよ♪";
        alert(copytext);  
      } else {
        // 空
        alert('Please click Generate Password');
      }

    },
  },
  watch: {
    passLen: function () {
      this.chanege()
    },
    checkSym: function () {
      this.chanege()
    },
  }

};
  const createPassword = (len) => {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';

    var passBase  = alphabet + alphabetUpper + numbers;

    // var len = 8; // 8桁
    var password='';

    for (var i = 0; i < len; i++) {
        password += passBase.charAt(Math.floor(Math.random() * passBase.length));
    }

    return password;
  };
  const createPassword2 = (len) => {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var symbol = '!#$%()=-^¥[@]:;{}_/.'
  var numbers = '0123456789';

  var passBase  = alphabet + alphabetUpper + numbers + symbol;

  // var len = 8; // 8桁
  var password='';

  for (var i = 0; i < len; i++) {
      password += passBase.charAt(Math.floor(Math.random() * passBase.length));
  }

  return password;  
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 140px 0 0;
}

/* * {
  font-weight: 12px;
} */

.title {
  font-weight: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 20px;
}
a {
  color: #42b983;
}
</style>