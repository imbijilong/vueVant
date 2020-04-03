<template>
  <div class="home">
    <div class="demo-block">
      <!-- <img class="demo-img" v-for="(img, index) in imageList" v-lazy="img" :key="index"> -->
      <img class="demo-img" />
    </div>
    <div class="addressTitle">
      <div class="third-div">
        <div class="fill-in">
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address1" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">县(市、区)</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address2" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">乡(镇、街道)</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address3" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">村(居)委会</div>
        </div>
        <div class="fill-in">
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address4" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">普查小区</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address5" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">户编号</div>
        </div>
      </div>
    </div>

    <div class="s1">
      <div class="first-title">每个死亡人口都登记的项目:</div>
      <div class="second-title">S1. 姓名</div>
      <div class="levelthird-div">
        <div class="levelfill-in">
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address14" input-align="center" />
            </van-cell-group>
          </div>
        </div>
      </div>
    </div>

    <div class="s2">
      <div class="second-title">S2. 公民身份号码</div>
      <div class="levelthird-div">
        <div class="levelfill-in">
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address15" input-align="center" />
            </van-cell-group>
          </div>
        </div>
      </div>
    </div>
    <div class="s3">
      <div class="second-title">
        <span class="title">S3.</span> 性别
      </div>
      <div class="third-div">
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1" checked-color="#323233">
            <div class="radio-text">1. 男</div>
          </van-radio>
          <van-radio name="2" checked-color="#323233">
            <div class="radio-text">2. 女</div>
          </van-radio>
        </van-radio-group>
      </div>
    </div>
    <div class="s4">
      <div class="second-title">S4. 出生年月</div>
      <div class="levelthird-div">
        <div class="levelfill-in">
          <div class="text-info">出生于</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address16" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">年</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address17" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">月</div>
        </div>
      </div>
    </div>
    <div class="s5">
      <div class="second-title">S5. 死亡时间</div>
      <div class="levelthird-div">
        <div class="levelfill-in">
          <div class="text-info">死亡月</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address16" input-align="center" />
            </van-cell-group>
          </div>
        </div>
      </div>
    </div>
    <div class="s6">
      <div class="second-title">S6. 民族</div>
      <div class="levelthird-div">
        <div class="levelfill-in">
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address18" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">族</div>
        </div>
      </div>
    </div>

    <div class="s7">
      <div class="second-title">死亡时满6周岁的人登记的项目</div>
      <div class="second-title">S7. 受教育程度</div>
      <div class="third-div">
        <van-radio-group v-model="radioc17" direction="horizontal">
          <div class="h14radio">
            <div>
              <van-radio name="0" checked-color="#323233">
                <div class="radio-text">1. 未上过学</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">2. 小学</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="2" checked-color="#323233">
                <div class="radio-text">3. 初中</div>
              </van-radio>
            </div>
          </div>
          <div class="h14radio">
            <div>
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">4. 高中</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">5. 大学专科</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="6" checked-color="#323233">
                <div class="radio-text">6. 大学本科</div>
              </van-radio>
            </div>
          </div>
          <div class="h14radio">
            <div>
              <van-radio name="7" checked-color="#323233">
                <div class="radio-text">7. 研究生</div>
              </van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div class="s8">
      <div class="second-title">死亡时满15周岁的人登记的项目:</div>
      <div class="second-title">S8. 婚姻状况</div>
      <div class="third-div">
        <van-radio-group v-model="radios8" direction="horizontal">
          <div class="h14radio">
            <div>
              <van-radio name="0" checked-color="#323233">
                <div class="radio-text">1. 未婚</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">2. 有配偶</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="2" checked-color="#323233">
                <div class="radio-text">3. 离婚</div>
              </van-radio>
            </div>
          </div>
          <div class="h14radio">
            <div>
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">4. 丧偶</div>
              </van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/TabBar.vue";
import helper from "@/mixins/helper";
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  mixins: [helper],
  components: {
    TabBar
  },
  data() {
    return {
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      address5: "",
      address6: "",
      address7: "",
      address8: "",
      address9: "",
      address10: "",
      address11: "",
      address12: "",
      address13: "",
      address14: "",
      address15: "",
      address16: "",
      address17: "",
      address18: "",
      address19: "",
      address20: "",
      address21: "",
      address22: "",
      address23: "",
      address24: "",
      radio: "",
      value: "",
      radio2: "",
      radio3: "",
      radioD10: "",
      radioD12: "",
      radioh5: "",
      radiod8: "",
      radiod9: "",
      radioc17: "",
      radios8: "",
      h6h7model: true,
      d9d10model: true,
      d10model: true
    };
  },
  computed: {
    ...mapState({
      imageList: state => state.example.imageList
    })
  },
  mounted() {
    this.queryImgList(data => {
      this.$toast(data.log);
    });
  },
  methods: {
    ...mapActions({
      queryImgList: "example/queryImgList"
    }),
    radioh5Checded: function(e) {
      if (e == "1" || e == "2") {
        this.h6h7model = true;
      } else {
        this.h6h7model = false; //H5.住房类型选择3-6的，跳至个人项目
      }
    },
    radiod8Checded: function(e) {
      if (e == "5") {
        this.d9d10model = false;
      } else {
        this.d9d10model = true; //D8. 户口登记地选择5 户口待定跳转至D11
      }
    },
    radiod9Checded: function(e) {
      if (e == "1") {
        this.d10model = false;
      } else {
        this.d10model = true; //D9. 离开户口登记地时间选择1 没有离开户口登记地，跳至至D11
      }
    }
  }
};
</script>

<style scoped lang="less">
.demo-block {
  padding: 0 15px 10px 15px;
  .demo-img {
    padding: 15px;
    width: 100%;
    height: 150px;
    margin: 10px 0 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
}
//带有输入框的信息竖向显示
.third-div {
  margin: 10px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  //竖向显示的文本
  .fill-in {
    display: flex;
    flex-direction: row;
  }
  //输入框样式
  /deep/ .van-cell {
    padding: 0;
    width: 60px;
    height: 13px;
    line-height: 6px;
    background: #f0f0f0;
    border-bottom: 1px solid #000000;
  }
  //输入框字体大小
  /deep/ .van-field__control {
    font-size: 7px;
  }
}
//带有输入框的信息水平显示
.levelthird-div {
  margin: 10px 0px 0px 20px;
  display: flex;
  justify-content: flex-start;
  //水平显示的文本
  .levelfill-in {
    display: flex;
    justify-content: flex-start;
    width: 100px;
  }
  //输入框样式
  /deep/ .van-cell {
    padding: 0;
    width: 60px;
    height: 13px;
    line-height: 6px;
    background: #f0f0f0;
    border-bottom: 1px solid #000000;
  }
  //输入框字体大小
  /deep/ .van-field__control {
    font-size: 7px;
  }
}
//地址信息栏
.addressTitle {
  .third-div {
    margin: 10px 0px 10px 10px;
    display: flex;
    flex-direction: column;
    //竖向显示的文本
    .fill-in {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
    }
    //输入框样式
    /deep/ .van-cell {
      padding: 0;
      width: 65px;
      height: 13px;
      line-height: 6px;
      background: #f0f0f0;
      border-bottom: 1px solid #000000;
    }
    //输入框字体大小
    /deep/ .van-field__control {
      font-size: 7px;
    }
  }
}
//所有radio前面圈的样式
/deep/ .van-radio__icon .van-icon {
  display: block;
  // box-sizing: border-box;
  width: 5px;
  height: 5px;
  color: transparent;
  font-size: 0.8em;
  line-height: 5px;
  text-align: inherit;
  border: 1px solid #323233;
  margin: 9px 0 0 5px;
  border-color: #323233;
}
.s1 {
  margin: 0 0 0 10px;
  height: 100px;
}
.s2,
.s3,
.s4,
.s5 {
  margin: 0 0 0 10px;
  height: 60px;
}
.s6 {
  margin: 0 0 0 10px;
  height: 70px;
}
.s7 {
  margin-left: 10px;
  height: 150px;
  .h14radio {
    display: flex;
    margin-bottom: 10px;
    .van-radio {
      height: 20px;
      width: 95px;
      border-radius: 3px;
    }
  }
}
.s8 {
  margin-left: 10px;
  height: 170px;
  .h14radio {
    display: flex;
    margin-bottom: 10px;
    .van-radio {
      height: 20px;
      width: 95px;
      border-radius: 3px;
    }
  }
}
</style>

