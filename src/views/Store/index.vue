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
    <div class="h1">
      <div class="first-title">一、住户项目</div>
      <div class="second-title">
        <span class="title">H1.</span> 户别
      </div>
      <div class="third-div">
        <van-radio-group v-model="radio" direction="horizontal">
          <!-- <div class="h1radio"> -->
          <van-radio name="1" checked-color="#323233">
            <div class="radio-text">1. 家庭户</div>
          </van-radio>
          <van-radio name="2" checked-color="#323233">
            <div class="radio-text">2. 集体户</div>
          </van-radio>
          <!-- </div> -->
        </van-radio-group>
      </div>
    </div>
    <div class="h2">
      <div class="second-title">H2. 本户应登记人数</div>
      <div class="third-div">
        <div class="fill-in">
          <div class="text-info">2020年10月31日晚居住本户的人数</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address6" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">人</div>
        </div>
        <div class="fill-in">
          <div class="text-info">户口在本户，2020年10月31日晚未住本户的人数</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address7" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">人</div>
        </div>
      </div>
    </div>
    <div class="h3">
      <div class="second-title">H3. 本户2019年11月1日至2020年10月31日期间的出生人口</div>
      <div class="levelthird-div">
        <div class="levelfill-in">
          <div class="text-info">男</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address8" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">人</div>
        </div>
        <div class="levelfill-in">
          <div class="text-info">女</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address9" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">人</div>
        </div>
      </div>
    </div>
    <div class="h4">
      <div class="second-title">H4. 本户2019年11月1日至2020年10月31日期间的死亡人口</div>
      <div class="levelthird-div">
        <div class="levelfill-in">
          <div class="text-info">男</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address10" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">人</div>
        </div>
        <div class="levelfill-in">
          <div class="text-info">女</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address11" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">人</div>
        </div>
      </div>
    </div>
    <div class="h5">
      <div class="second-title">H5. 住房类型</div>
      <div class="third-div">
        <van-radio-group v-model="radioh5" direction="horizontal">
          <div class="h5radio">
            <div>
              <van-radio name="1" checked-color="#323233" @click="radioh5Checded(radioh5)">
                <div class="radio-text">1. 普通住房</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="2" checked-color="#323233" @click="radioh5Checded(radioh5)">
                <div class="radio-text">2. 商住公寓</div>
              </van-radio>
            </div>
          </div>
          <div class="h5radio3">
            <van-radio name="3" checked-color="#323233" @click="radioh5Checded(radioh5)">
              <div class="radio-text">
                3.
                <span class="h5radio3Span">集体住所(学生宿舍、职工宿舍、工棚、养老院、福利院、旅馆、宗教机构等)</span>
              </div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="4" checked-color="#323233" @click="radioh5Checded(radioh5)">
              <div class="radio-text">4. 其他住所</div>
            </van-radio>
            <van-radio name="5" checked-color="#323233" @click="radioh5Checded(radioh5)">
              <div class="radio-text">5. 非居住房屋</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="6" checked-color="#323233" @click="radioh5Checded(radioh5)">
              <div class="radio-text">6. 无住房</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>
    <div v-show="h6toh19model">
      <div class="h6">
        <div class="second-title">H6. 本户住房建筑面积</div>
        <div class="levelthird-div">
          <div class="levelfill-in">
            <div class="text-info">
              <van-cell-group>
                <van-field v-model="address12" input-align="center" />
              </van-cell-group>
            </div>
            <div class="text-info">平方米</div>
          </div>
        </div>
      </div>
      <div class="h7">
        <div class="second-title">H7. 本户住房间数</div>
        <div class="levelthird-div">
          <div class="levelfill-in">
            <div class="text-info">
              <van-cell-group>
                <van-field v-model="address13" input-align="center" />
              </van-cell-group>
            </div>
            <div class="text-info">间</div>
          </div>
        </div>
      </div>

      <div class="h8">
        <div class="second-title">H8. 建筑层数</div>
        <div class="third-div">
          <van-radio-group v-model="radioh8" direction="horizontal">
            <div class="h8radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 平房</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 多层(7层及以下)</div>
                </van-radio>
              </div>
            </div>
            <div class="h8radio">
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">3. 高层(8-33层)</div>
              </van-radio>
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">4. 超高层(34层及以上)</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div class="h9">
        <div class="second-title">H9. 建筑结构</div>
        <div class="third-div">
          <van-radio-group v-model="radioh9" direction="horizontal">
            <div class="h9radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 钢及钢筋混凝土结构</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 混合结构</div>
                </van-radio>
              </div>
            </div>
            <div class="h9radio">
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">3. 砖木结构</div>
              </van-radio>
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">4. 装配式建筑</div>
              </van-radio>
            </div>
            <div class="h9radio">
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">5. 竹、木结构</div>
              </van-radio>
              <van-radio name="6" checked-color="#323233">
                <div class="radio-text">6. 窑洞</div>
              </van-radio>
            </div>
            <div class="h9radio">
              <van-radio name="7" checked-color="#323233">
                <div class="radio-text">7. 其他结构</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div class="h10">
        <div class="second-title">H10. 住房建成年代</div>
        <div class="third-div">
          <van-radio-group v-model="radioh10" direction="horizontal">
            <div class="h10radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 1949年以前</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 1949-1959年</div>
                </van-radio>
              </div>
            </div>
            <div class="h10radio">
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">3. 1960-1969年</div>
              </van-radio>
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">4. 1970-1979年</div>
              </van-radio>
            </div>
            <div class="h10radio">
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">5. 1980-1989年</div>
              </van-radio>
              <van-radio name="6" checked-color="#323233">
                <div class="radio-text">6. 1990-1999年</div>
              </van-radio>
            </div>
            <div class="h10radio">
              <van-radio name="7" checked-color="#323233">
                <div class="radio-text">7. 2000-2009年</div>
              </van-radio>
              <van-radio name="8" checked-color="#323233">
                <div class="radio-text">8. 2010-2014年</div>
              </van-radio>
            </div>
            <div class="h10radio">
              <van-radio name="9" checked-color="#323233">
                <div class="radio-text">9. 2015年以后</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div class="h11">
        <div class="second-title">H11.住房所在建筑有无电梯</div>
        <div class="third-div">
          <van-radio-group v-model="radioh11" direction="horizontal">
            <van-radio name="1" checked-color="#323233">
              <div class="radio-text">1. 有</div>
            </van-radio>
            <van-radio name="2" checked-color="#323233">
              <div class="radio-text">2. 无</div>
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="h12">
        <div class="second-title">H12. 主要炊事燃料</div>
        <div class="third-div">
          <van-radio-group v-model="radioh12" direction="horizontal">
            <div class="h12radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 燃气</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 电</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="3" checked-color="#323233">
                  <div class="radio-text">3. 煤炭</div>
                </van-radio>
              </div>
            </div>
            <div class="h12radio">
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">4. 柴草</div>
              </van-radio>
            </div>
            <div class="h12radio">
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">5. 其他</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div class="h13">
        <div class="second-title">H13.住房内有无管道自来水</div>
        <div class="third-div">
          <van-radio-group v-model="radioh13" direction="horizontal">
            <van-radio name="1" checked-color="#323233">
              <div class="radio-text">1. 有</div>
            </van-radio>
            <van-radio name="2" checked-color="#323233">
              <div class="radio-text">2. 无</div>
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="h14">
        <div class="second-title">H14. 住房内有无厨房</div>
        <div class="third-div">
          <van-radio-group v-model="radioh14" direction="horizontal">
            <div class="h14radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 独立使用</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 与其他户合用</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="3" checked-color="#323233">
                  <div class="radio-text">3. 无</div>
                </van-radio>
              </div>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div class="h15">
        <div class="second-title">H15. 住房内有无厕所</div>
        <div class="third-div">
          <van-radio-group v-model="radioh15" direction="horizontal">
            <div class="h15radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 独立使用抽水/冲水式</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 合用抽水/冲水式</div>
                </van-radio>
              </div>
            </div>
            <div class="h15radio">
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">3. 独立使用其他样式</div>
              </van-radio>
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">4. 合用其他样式</div>
              </van-radio>
            </div>
            <div class="h15radio">
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">5. 无</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div class="h16">
        <div class="second-title">H16. 住房内有无洗澡设施</div>
        <div class="third-div">
          <van-radio-group v-model="radioh16" direction="horizontal">
            <div class="h15radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 统一供热水</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 家庭自装热水器</div>
                </van-radio>
              </div>
            </div>
            <div class="h15radio">
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">3. 其他</div>
              </van-radio>
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">4. 无</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div class="h17">
        <div class="second-title">H17. 住房来源</div>
        <div class="third-div">
          <van-radio-group v-model="radioh17" direction="horizontal">
            <div class="h15radio">
              <div>
                <van-radio name="1" checked-color="#323233" @click="radioh17Checded(radioh17)">
                  <div class="radio-text">1. 租赁廉租房、公租房</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233" @click="radioh17Checded(radioh17)">
                  <div class="radio-text">2. 租赁其他住房</div>
                </van-radio>
              </div>
            </div>
            <div class="h15radio">
              <van-radio name="3" checked-color="#323233" @click="radioh17Checded(radioh17)">
                <div class="radio-text">3. 购买新建商品房</div>
              </van-radio>
              <van-radio name="4" checked-color="#323233" @click="radioh17Checded(radioh17)">
                <div class="radio-text">4. 购买二手房</div>
              </van-radio>
            </div>
            <div class="h15radio">
              <van-radio name="5" checked-color="#323233" @click="radioh17Checded(radioh17)">
                <div class="radio-text">5. 购买原公有住房</div>
              </van-radio>
              <van-radio name="6" checked-color="#323233" @click="radioh17Checded(radioh17)">
                <div class="radio-text">6. 购买经济适用房、两限房</div>
              </van-radio>
            </div>
            <div class="h15radio">
              <van-radio name="7" checked-color="#323233" @click="radioh17Checded(radioh17)">
                <div class="radio-text">7. 自建住房</div>
              </van-radio>
              <van-radio name="8" checked-color="#323233" @click="radioh17Checded(radioh17)">
                <div class="radio-text">8. 其他</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div v-show="h18model">
        <div class="h18">
          <div class="second-title">H18. 月租房费用</div>
          <div class="third-div">
            <van-radio-group v-model="radioh18" direction="horizontal">
              <div class="h14radio">
                <div>
                  <van-radio name="0" checked-color="#323233">
                    <div class="radio-text">0. 200元以下</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="1" checked-color="#323233">
                    <div class="radio-text">1. 200-500元</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="2" checked-color="#323233">
                    <div class="radio-text">2. 500-1000元</div>
                  </van-radio>
                </div>
              </div>
              <div class="h14radio">
                <div>
                  <van-radio name="3" checked-color="#323233">
                    <div class="radio-text">3. 1500-2000元</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="4" checked-color="#323233">
                    <div class="radio-text">4. 2000-3000元</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="5" checked-color="#323233">
                    <div class="radio-text">5. 3000-4000元</div>
                  </van-radio>
                </div>
              </div>
              <div class="h14radio">
                <div>
                  <van-radio name="6" checked-color="#323233">
                    <div class="radio-text">6. 4000-6000元</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="7" checked-color="#323233">
                    <div class="radio-text">7. 6000-8000元</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="8" checked-color="#323233">
                    <div class="radio-text">8. 8000-10000元</div>
                  </van-radio>
                </div>
              </div>
              <div class="h14radio">
                <div>
                  <van-radio name="9" checked-color="#323233">
                    <div class="radio-text">9. 10000元以上</div>
                  </van-radio>
                </div>
              </div>
            </van-radio-group>
          </div>
        </div>
      </div>
      <div class="h19">
        <div class="second-title">H19. 拥有家用汽车的情况</div>
        <div class="third-div">
          <van-radio-group v-model="radioh19" direction="horizontal">
            <div class="h15radio">
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 拥有100万元以上的汽车</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 拥有50-100万元的汽车</div>
                </van-radio>
              </div>
            </div>
            <div class="h15radio">
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">3. 拥有30-50万元的汽车</div>
              </van-radio>
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">4. 拥有20-30万元的汽车</div>
              </van-radio>
            </div>
            <div class="h15radio">
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">5. 拥有10-20万元的汽车</div>
              </van-radio>
              <van-radio name="6" checked-color="#323233">
                <div class="radio-text">6. 拥有10万元以下的汽车</div>
              </van-radio>
            </div>
            <div class="h15radio">
              <van-radio name="7" checked-color="#323233">
                <div class="radio-text">7. 没有汽车</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
    </div>

    <div class="c1">
      <div class="first-title">二、个人项目</div>
      <div class="second-title">每个人都填报的项目:</div>
      <div class="second-title">C1. 姓名</div>
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

    <div class="c2">
      <div class="second-title">C2. 与户主关系</div>
      <div class="third-div">
        <van-radio-group v-model="radio2" direction="horizontal">
          <div class="h5radio">
            <div>
              <van-radio name="0" checked-color="#323233">
                <div class="radio-text">0. 户主</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">1. 配偶</div>
              </van-radio>
            </div>
          </div>
          <div class="h5radio">
            <van-radio name="2" checked-color="#323233">
              <div class="radio-text">2. 子女</div>
            </van-radio>
            <van-radio name="3" checked-color="#323233">
              <div class="radio-text">3. 父母</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="4" checked-color="#323233">
              <div class="radio-text">4. 岳父母或公婆</div>
            </van-radio>
            <van-radio name="5" checked-color="#323233">
              <div class="radio-text">5. 祖父母</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="6" checked-color="#323233">
              <div class="radio-text">6. 媳婿</div>
            </van-radio>
            <van-radio name="7" checked-color="#323233">
              <div class="radio-text">7. 孙子女</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="8" checked-color="#323233">
              <div class="radio-text">8. 兄弟姐妹</div>
            </van-radio>
            <van-radio name="9" checked-color="#323233">
              <div class="radio-text">9. 其他</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>
    <div class="c3">
      <div class="second-title">C3. 公民身份号码</div>
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
    <div class="c4">
      <div class="second-title">
        <span class="title">C4.</span> 性别
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
    <div class="c5">
      <div class="second-title">C5. 出生年月</div>
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
    <div class="c6">
      <div class="second-title">C6. 民族</div>
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
    <div class="c7">
      <div class="second-title">C7. 普查时点居住地</div>
      <div class="third-div">
        <van-radio-group v-model="radio2">
          <div class="d7radio">
            <van-radio name="0" checked-color="#323233">
              <div class="radio-text">1. 本普查小区</div>
            </van-radio>
          </div>
          <div class="d7radio">
            <van-radio name="1" checked-color="#323233">
              <div class="radio-text">2. 本村(居)委会其他普查小区</div>
            </van-radio>
          </div>
          <div class="d7radio">
            <van-radio name="2" checked-color="#323233">
              <div class="radio-text">3. 本乡(镇、街道)其他村(居)委会</div>
            </van-radio>
          </div>
          <div class="d7radio">
            <van-radio name="3" checked-color="#323233">
              <div class="radio-text">4. 本县(市、区)其他乡(镇、街道)</div>
            </van-radio>
          </div>

          <div class="radioFive">5. 其他县(市、区)，请填写下面地址</div>
          <div class="third-div">
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address19" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">省(区、市)</div>
            </div>
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address20" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">地(市)</div>
            </div>
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address21" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">县(市、区)</div>
            </div>
          </div>
          <div class="d7radio">
            <van-radio name="6" checked-color="#323233">
              <div class="radio-text">6. 港澳台或国外</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>
    <div class="c8">
      <div class="second-title">C8. 户口登记地</div>
      <div class="third-div">
        <van-radio-group v-model="radioc8">
          <div class="d8radio">
            <van-radio name="1" checked-color="#323233" clickable @click="radioc8Checded(radioc8)">
              <div class="radio-text">1. 本村(居)委会</div>
            </van-radio>
          </div>
          <div class="d8radio">
            <van-radio name="2" checked-color="#323233" clickable @click="radioc8Checded(radioc8)">
              <div class="radio-text">2. 本乡(镇、街道)其他村(居)委会</div>
            </van-radio>
          </div>
          <div class="d8radio">
            <van-radio name="3" checked-color="#323233" clickable @click="radioc8Checded(radioc8)">
              <div class="radio-text">3. 本县(市、区)其他乡(镇、街道)</div>
            </van-radio>
          </div>
          <div class="radioFive">4. 其他县(市、区)，请填写下面地址</div>
          <div class="third-div">
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address22" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">省(区、市)</div>
            </div>
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address23" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">地(市)</div>
            </div>
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address24" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">县(市、区)</div>
            </div>
          </div>
          <div class="d8radio">
            <van-radio name="5" checked-color="#323233" @click="radioc8Checded(radioc8)">
              <div class="radio-text">5. 户口待定</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>
    <div v-show="d9d10d11model">
      <div class="c9">
        <div class="second-title">C9. 离开户口登记地时间</div>
        <div class="third-div">
          <van-radio-group v-model="radioc9" direction="horizontal">
            <div class="h5radio">
              <div>
                <van-radio name="1" checked-color="#323233" @click="radioc9Checded(radioc9)">
                  <div class="radio-text">1. 没有离开户口登记地</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="2" checked-color="#323233" @click="radioc9Checded(radioc9)">
                  <div class="radio-text">2. 不满半年</div>
                </van-radio>
              </div>
            </div>
            <div class="h5radio">
              <van-radio name="3" checked-color="#323233" @click="radioc9Checded(radioc9)">
                <div class="radio-text">3. 半年以上，不满一年</div>
              </van-radio>
              <van-radio name="4" checked-color="#323233" @click="radioc9Checded(radioc9)">
                <div class="radio-text">4. 一年</div>
              </van-radio>
            </div>
            <div class="h5radio">
              <van-radio name="5" checked-color="#323233" @click="radioc9Checded(radioc9)">
                <div class="radio-text">5. 二年</div>
              </van-radio>
              <van-radio name="6" checked-color="#323233" @click="radioc9Checded(radioc9)">
                <div class="radio-text">6. 三年</div>
              </van-radio>
            </div>
            <div class="h5radio">
              <van-radio name="7" checked-color="#323233" @click="radioc9Checded(radioc9)">
                <div class="radio-text">7. 四年</div>
              </van-radio>
              <van-radio name="8" checked-color="#323233" @click="radioc9Checded(radioc9)">
                <div class="radio-text">8. 五年</div>
              </van-radio>
            </div>
            <div class="h5radio">
              <van-radio name="9" checked-color="#323233" @click="radioc9Checded(radioc9)">
                <div class="radio-text">9. 六年及以上</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>
      <div v-show="d10d11model">
        <div class="c10">
          <div class="second-title">C10. 离开户口登记地原因</div>
          <div class="third-div">
            <van-radio-group v-model="radioc10" direction="horizontal">
              <div class="h5radio">
                <div>
                  <van-radio name="0" checked-color="#323233">
                    <div class="radio-text">0. 工作就业</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="1" checked-color="#323233">
                    <div class="radio-text">1. 学习培训</div>
                  </van-radio>
                </div>
              </div>
              <div class="h5radio">
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 随同迁移</div>
                </van-radio>
                <van-radio name="3" checked-color="#323233">
                  <div class="radio-text">3. 房屋拆迁</div>
                </van-radio>
              </div>
              <div class="h5radio">
                <van-radio name="4" checked-color="#323233">
                  <div class="radio-text">4. 改善住房</div>
                </van-radio>
                <van-radio name="5" checked-color="#323233">
                  <div class="radio-text">5. 寄挂户口</div>
                </van-radio>
              </div>
              <div class="h5radio">
                <van-radio name="6" checked-color="#323233">
                  <div class="radio-text">6. 婚姻嫁娶</div>
                </van-radio>
                <van-radio name="7" checked-color="#323233">
                  <div class="radio-text">7. 照料孙子女</div>
                </van-radio>
              </div>
              <div class="h5radio">
                <van-radio name="8" checked-color="#323233">
                  <div class="radio-text">8. 为子女就学</div>
                </van-radio>
                <van-radio name="9" checked-color="#323233">
                  <div class="radio-text">9. 其他</div>
                </van-radio>
              </div>
            </van-radio-group>
          </div>
        </div>
        <div class="c11">
          <div class="second-title">C11. 在本市居住时间</div>
          <div class="third-div">
            <van-radio-group v-model="radioc11" direction="horizontal">
              <div class="h5radio">
                <div>
                  <van-radio name="0" checked-color="#323233">
                    <div class="radio-text">1. 不满半年</div>
                  </van-radio>
                </div>
                <div>
                  <van-radio name="1" checked-color="#323233">
                    <div class="radio-text">2. 半年以上，不满一年</div>
                  </van-radio>
                </div>
              </div>
              <div class="h5radio">
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">3. 一年</div>
                </van-radio>
                <van-radio name="3" checked-color="#323233">
                  <div class="radio-text">4. 二年</div>
                </van-radio>
              </div>
              <div class="h5radio">
                <van-radio name="4" checked-color="#323233">
                  <div class="radio-text">5. 三年</div>
                </van-radio>
                <van-radio name="5" checked-color="#323233">
                  <div class="radio-text">6. 四年</div>
                </van-radio>
              </div>
              <div class="h5radio">
                <van-radio name="6" checked-color="#323233">
                  <div class="radio-text">7. 五年</div>
                </van-radio>
                <van-radio name="7" checked-color="#323233">
                  <div class="radio-text">8. 六年及以上</div>
                </van-radio>
              </div>
              <div class="h5radio">
                <van-radio name="8" checked-color="#323233">
                  <div class="radio-text">8. 为子女就学</div>
                </van-radio>
                <van-radio name="9" checked-color="#323233">
                  <div class="radio-text">9. 其他</div>
                </van-radio>
              </div>
            </van-radio-group>
          </div>
        </div>
      </div>
    </div>
    <div class="c12">
      <div class="second-title">仅限跨地（市）或直辖市流动人口填报:</div>
      <div class="second-title">C12. 户口所在家庭是否有农村土地承包权</div>
      <div class="third-div">
        <van-radio-group v-model="radioc12" direction="horizontal">
          <div class="h5radio">
            <div>
              <van-radio name="0" checked-color="#323233">
                <div class="radio-text">1. 有</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">2. 无</div>
              </van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
    </div>
    <div class="c13">
      <div class="second-title">C13. 出生地</div>
      <div class="third-div">
        <van-radio-group v-model="radioc13" direction="horizontal">
          <div class="h5radio">
            <div>
              <van-radio name="0" checked-color="#323233">
                <div class="radio-text">1. 本县(市、区)</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">2. 本省其他县(市、区)</div>
              </van-radio>
            </div>
          </div>
        </van-radio-group>
        <div class="fill-in">
          <div class="text-info">3. 省外:</div>
          <div class="text-info">
            <van-cell-group>
              <van-field v-model="address22" input-align="center" />
            </van-cell-group>
          </div>
          <div class="text-info">省(区、市)</div>
        </div>
      </div>
    </div>
    <div class="c14">
      <div class="second-title">3至7周岁(2012年11月1日—2017年10月31日出生)的人填报的项目:</div>
      <div class="second-title">C14. 接受学前教育情况</div>
      <div class="third-div">
        <van-radio-group v-model="radioc14" direction="horizontal">
          <div class="h5radio">
            <van-radio name="2" checked-color="#323233">
              <div class="radio-text">1. 正在接受学前教育</div>
            </van-radio>
            <van-radio name="3" checked-color="#323233">
              <div class="radio-text">3. 未接受学前教育</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="1" checked-color="#323233">
              <div class="radio-text">3. 已完成学前教育</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>
    <div class="c15">
      <div class="second-title">5周岁及以上(2015年10月31日以前出生)的人填报:</div>
      <div class="second-title">C15. 五年前常住地(2015年11月1日常住地)</div>
      <div class="third-div">
        <van-radio-group v-model="radioc8">
          <div class="d8radio">
            <van-radio name="1" checked-color="#323233">
              <div class="radio-text">1. 本县(市、区)</div>
            </van-radio>
          </div>
          <div class="radioFive">2. 其他地区(请填报具体地址)</div>
          <div class="third-div">
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address22" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">省(区、市)</div>
            </div>
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address23" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">地(市)</div>
            </div>
            <div class="fill-in">
              <div class="text-info">
                <van-cell-group>
                  <van-field v-model="address24" input-align="center" />
                </van-cell-group>
              </div>
              <div class="text-info">县(市、区)</div>
            </div>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div class="c16">
      <div class="second-title">6周岁及以上(2014年10月31日以前出生)的人填报的项目:</div>
      <div class="second-title">C16. 受教育程度</div>
      <div class="third-div">
        <van-radio-group v-model="radioc16" direction="horizontal">
          <div class="h5radio">
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
          </div>
          <div class="h5radio">
            <van-radio name="2" checked-color="#323233">
              <div class="radio-text">3. 初中</div>
            </van-radio>
            <van-radio name="3" checked-color="#323233">
              <div class="radio-text">4. 高中</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="4" checked-color="#323233">
              <div class="radio-text">5. 大学专科</div>
            </van-radio>
            <van-radio name="5" checked-color="#323233">
              <div class="radio-text">6. 大学本科</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="6" checked-color="#323233">
              <div class="radio-text">7. 研究生</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div class="c17">
      <div class="second-title">C17. 学业完成情况</div>
      <div class="third-div">
        <van-radio-group v-model="radioc17" direction="horizontal">
          <div class="h14radio">
            <div>
              <van-radio name="0" checked-color="#323233">
                <div class="radio-text">1. 在校</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">2. 毕业</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="2" checked-color="#323233">
                <div class="radio-text">3. 肄业</div>
              </van-radio>
            </div>
          </div>
          <div class="h14radio">
            <div>
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">4. 辍学</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">5. 其他</div>
              </van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div class="c18">
      <div class="second-title">15周岁及以上(2005年10月31日以前出生)的人填报:</div>
      <div class="second-title">C18. 工作情况</div>
      <div class="small-title">10月25—31日是否为取得收入而工作了一小时以上(包括临时工、互联网灵活就业、家庭经营无酬帮工)</div>
      <div class="third-div">
        <van-radio-group v-model="radioc18">
          <div class="fill-in">
            <div class="text-info">1. 是，上周工作时间</div>
            <div class="text-info">
              <van-cell-group>
                <van-field v-model="address22" input-align="center" />
              </van-cell-group>
            </div>
            <div class="text-info">小时</div>
          </div>
          <div class="d8radio">
            <van-radio
              name="2"
              checked-color="#323233"
              clickable
              @click="radioc18Checded(radioc18)"
            >
              <div class="radio-text">2. 在职休假、在职学习培训、临时停工</div>
            </van-radio>
          </div>
          <div class="d8radio">
            <van-radio
              name="3"
              checked-color="#323233"
              clickable
              @click="radioc18Checded(radioc18)"
            >
              <div class="radio-text">3. 未做任何工作</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div v-show="c19toc21model">
      <div class="c19">
        <div class="second-title">C19. 工作单位或生产经营活动所属类型</div>
        <div class="third-div">
          <van-radio-group v-model="radioc19" direction="horizontal">
            <div class="h5radio">
              <div>
                <van-radio name="0" checked-color="#323233">
                  <div class="radio-text">0. 机关团体事业单位</div>
                </van-radio>
              </div>
              <div>
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 国有及国有控股企业</div>
                </van-radio>
              </div>
            </div>
            <div class="h5radio">
              <van-radio name="2" checked-color="#323233">
                <div class="radio-text">2. 集体企业</div>
              </van-radio>
              <van-radio name="3" checked-color="#323233">
                <div class="radio-text">3. 私营企业</div>
              </van-radio>
            </div>
            <div class="h5radio">
              <van-radio name="4" checked-color="#323233">
                <div class="radio-text">4. 外商、港澳台投资企业</div>
              </van-radio>
              <van-radio name="5" checked-color="#323233">
                <div class="radio-text">5. 其他类型单位</div>
              </van-radio>
            </div>
            <div class="h5radio">
              <van-radio name="6" checked-color="#323233">
                <div class="radio-text">6. 非农个体经营户</div>
              </van-radio>
            </div>
            <div class="h5radio3">
              <van-radio name="7" checked-color="#323233">
                <div class="radio-text">
                  7.
                  <span class="h5radio3Span">经营农村家庭承包地(包括开垦的土地)</span>
                </div>
              </van-radio>
            </div>
            <div class="h5radio3">
              <van-radio name="8" checked-color="#323233">
                <div class="radio-text">
                  8.
                  <span class="h5radio3Span">农村合作社/专业大户等新型农业经营主体</span>
                </div>
              </van-radio>
            </div>
            <div class="h5radio">
              <van-radio name="9" checked-color="#323233">
                <div class="radio-text">9. 自由职业/灵活就业</div>
              </van-radio>
            </div>
          </van-radio-group>
        </div>
      </div>

      <div class="c20">
        <div class="second-title">C20. 行业</div>
        <div class="third-div">
          <div class="fill-in">
            <div class="text-info">单位详细名称:</div>
            <div class="onetext-info">
              <van-cell-group>
                <van-field v-model="address6" input-align="center" />
              </van-cell-group>
            </div>
          </div>
          <div class="fill-in">
            <div class="text-info">主要产品或主要业务:</div>
            <div class="towtext-info">
              <van-cell-group>
                <van-field v-model="address7" input-align="center" />
              </van-cell-group>
            </div>
          </div>
        </div>
      </div>

      <div class="c21">
        <div class="second-title">C21. 职业</div>
        <div class="third-div">
          <div class="fill-in">
            <div class="text-info">本人从事的具体工作:</div>
            <div class="onetext-info">
              <van-cell-group>
                <van-field v-model="address6" input-align="center" />
              </van-cell-group>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c22">
      <div class="second-title">C22. 婚姻状况</div>
      <div class="third-div">
        <van-radio-group v-model="radioc22" direction="horizontal">
          <div class="h14radio">
            <div>
              <van-radio name="1" checked-color="#323233" @click="radioc22Checded(radioc22)">
                <div class="radio-text">1. 未婚</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="2" checked-color="#323233" @click="radioc22Checded(radioc22)">
                <div class="radio-text">2. 初婚有配偶</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="3" checked-color="#323233" @click="radioc22Checded(radioc22)">
                <div class="radio-text">3. 再婚有配偶</div>
              </van-radio>
            </div>
          </div>
          <div class="h14radio">
            <div>
              <van-radio name="4" checked-color="#323233" @click="radioc22Checded(radioc22)">
                <div class="radio-text">4. 离婚</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="5" checked-color="#323233" @click="radioc22Checded(radioc22)">
                <div class="radio-text">5. 丧偶</div>
              </van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div v-show="c23toc25model">
      <div class="c23">
        <div class="second-title">C23. 初婚年月</div>
        <div class="levelthird-div">
          <div class="levelfill-in">
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

      <div class="c24">
        <div class="second-title">15至64周岁(1955年11月1日—2005年10月31日出生)的妇女填报:</div>
        <div class="second-title">C24. 生育子女数</div>
        <div class="third-div">
          <van-radio-group v-model="radioc24">
            <div class="d8radio">
              <van-radio name="1" checked-color="#323233" @click="radioc24Checded(radioc24)">
                <div class="radio-text">1. 未生育</div>
              </van-radio>
            </div>
            <div class="d8radio">
              <van-radio name="2" checked-color="#323233" @click="radioc24Checded(radioc24)">
                <div class="radio-text">2. 有生育(请填报生育的子女数)</div>
              </van-radio>
            </div>
            <div class="radioFive">生过几个孩子:</div>
            <div class="third-div">
              <div class="fill-in">
                <div class="text-info">男</div>
                <div class="text-info">
                  <van-cell-group>
                    <van-field v-model="address22" input-align="center" />
                  </van-cell-group>
                </div>
                <div class="text-info">人</div>
              </div>
              <div class="fill-in">
                <div class="text-info">女</div>
                <div class="text-info">
                  <van-cell-group>
                    <van-field v-model="address22" input-align="center" />
                  </van-cell-group>
                </div>
                <div class="text-info">人</div>
              </div>
            </div>
            <div class="radioFive">其中现在存活几个孩子:</div>
            <div class="third-div">
              <div class="fill-in">
                <div class="text-info">男</div>
                <div class="text-info">
                  <van-cell-group>
                    <van-field v-model="address22" input-align="center" />
                  </van-cell-group>
                </div>
                <div class="text-info">人</div>
              </div>
              <div class="fill-in">
                <div class="text-info">女</div>
                <div class="text-info">
                  <van-cell-group>
                    <van-field v-model="address22" input-align="center" />
                  </van-cell-group>
                </div>
                <div class="text-info">人</div>
              </div>
            </div>
          </van-radio-group>
        </div>
      </div>

      <div v-show="c25model">
        <div class="c25">
          <div class="second-title">15至50周岁(1969年11月1日-2005年10月31日出生)的妇女填报:</div>
          <div class="second-title">C25. 过去一年(2019.11.1-2020.10.31)的生育状况</div>
          <div class="third-div">
            <van-radio-group v-model="radioc25">
              <div class="d8radio">
                <van-radio name="1" checked-color="#323233">
                  <div class="radio-text">1. 一年内未生育</div>
                </van-radio>
              </div>
              <div class="d8radio">
                <van-radio name="2" checked-color="#323233">
                  <div class="radio-text">2. 一年内有生育(请填报生育时间和孩子的性别)</div>
                </van-radio>
              </div>
            </van-radio-group>
            <div class="radioFive">生育时间是:</div>
            <div class="third-div">
              <div class="fill-in">
                <div class="text-info">
                  <van-cell-group>
                    <van-field v-model="address22" input-align="center" />
                  </van-cell-group>
                </div>
                <div class="text-info">月</div>
              </div>
            </div>
            <div class="radioFive">婴儿性别是:</div>
            <div class="childrenSex">
              <van-radio-group v-model="radioc25sex" direction="horizontal">
                <div class="d8radio">
                  <van-radio name="1" checked-color="#323233">
                    <div class="radio-text">1. 男</div>
                  </van-radio>
                </div>
                <div class="d8radio">
                  <van-radio name="2" checked-color="#323233">
                    <div class="radio-text">2. 女</div>
                  </van-radio>
                </div>
              </van-radio-group>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c26">
      <div class="second-title">60周岁及以上的人填报:</div>
      <div class="second-title">C26. 主要生活来源</div>
      <div class="third-div">
        <van-radio-group v-model="radioc26" direction="horizontal">
          <div class="h5radio">
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">1. 劳动收入</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="2" checked-color="#323233">
                <div class="radio-text">2. 离退休金养老金</div>
              </van-radio>
            </div>
          </div>
          <div class="h5radio">
            <van-radio name="3" checked-color="#323233">
              <div class="radio-text">3. 最低生活保障金</div>
            </van-radio>
            <van-radio name="4" checked-color="#323233">
              <div class="radio-text">4. 财产性收入</div>
            </van-radio>
          </div>
          <div class="h5radio">
            <van-radio name="5" checked-color="#323233">
              <div class="radio-text">5. 家庭其他成员供养</div>
            </van-radio>
            <van-radio name="6" checked-color="#323233">
              <div class="radio-text">6. 其他</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div class="c27">
      <div class="second-title">C27. 身体健康状况</div>
      <div class="third-div">
        <van-radio-group v-model="radioc27" direction="horizontal">
          <div class="h5radio">
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">1. 健康</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="2" checked-color="#323233">
                <div class="radio-text">2. 基本健康</div>
              </van-radio>
            </div>
          </div>
          <div class="h5radio">
            <van-radio name="3" checked-color="#323233">
              <div class="radio-text">3. 不健康，但生活能自理</div>
            </van-radio>
            <van-radio name="4" checked-color="#323233">
              <div class="radio-text">4. 生活不能自理</div>
            </van-radio>
          </div>
        </van-radio-group>
      </div>
    </div>

    <div class="c28">
      <div class="second-title">C28. 日常活动情况</div>
      <div class="small-title">5月1日-10月31日期间,由于健康问题导致日常活动出现困难的程度</div>
      <div class="third-div">
        <van-radio-group v-model="radioc28" direction="horizontal">
          <div class="h5radio">
            <div>
              <van-radio name="0" checked-color="#323233">
                <div class="radio-text">1. 非常困难</div>
              </van-radio>
            </div>
            <div>
              <van-radio name="1" checked-color="#323233">
                <div class="radio-text">2. 有困难，但不严重</div>
              </van-radio>
            </div>
          </div>
          <div class="h5radio">
            <van-radio name="3" checked-color="#323233">
              <div class="radio-text">3. 完全没有困难</div>
            </van-radio>
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
      radioh5: "",
      radioh8: "",
      radioh9: "",
      radioh10: "",
      radioh11: "",
      radioh12: "",
      radioh13: "",
      radioh14: "",
      radioh15: "",
      radioh16: "",
      radioh17: "",
      radioh18: "",
      radioh19: "",
      radioc8: "",
      radioc9: "",
      radioc10: "",
      radioc11: "",
      radioc12: "",
      radioc13: "",
      radioc14: "",
      radioc16: "",
      radioc17: "",
      radioc18: "",
      radioc19: "",
      radioc22: "",
      radioc24: "",
      radioc25: "",
      radioc26: "",
      radioc27: "",
      radioc28: "",
      radioc25sex: "",
      h6toh19model: true,
      h18model: true,
      d9d10d11model: true,
      d10d11model: true,
      c19toc21model: true,
      c23toc25model: true,
      c25model: true
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
        this.h6toh19model = true;
      } else {
        this.h6toh19model = false; //H5.住房类型选择3-6的，跳至个人项目
      }
    },
    radioh17Checded: function(e) {
      if ("2" < e && e < "9") {
        this.h18model = false;
      } else {
        this.h18model = true; //H5.住房来源选择3-8的，跳至H19
      }
    },
    radioc8Checded: function(e) {
      if (e == "5") {
        this.d9d10d11model = false;
      } else {
        this.d9d10d11model = true; //C8. 户口登记地选择5 户口待定跳转至C12
      }
    },
    radioc9Checded: function(e) {
      if (e == "1") {
        this.d10d11model = false;
      } else {
        this.d10d11model = true; //C9. 离开户口登记地时间选择1 没有离开户口登记地，跳至至C12
      }
    },
    radioc18Checded: function(e) {
      if (e == "3") {
        this.c19toc21model = false;
      } else {
        this.c19toc21model = true; //C18工作情况选择3 跳转至C22
      }
    },
    radioc22Checded: function(e) {
      if (e == "1") {
        this.c23toc25model = false;
      } else {
        this.c23toc25model = true; //C22婚姻状况选择1 跳转至C26
      }
    },
    radioc24Checded: function(e) {
      if (e == "1") {
        this.c25model = false;
      } else {
        this.c25model = true; //C24. 生育子女数选择1 跳转至C26
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
.h1 {
  margin-left: 10px;
  height: 100px;
}
.h2 {
  margin-left: 10px;
  height: 90px;
}
.h3,
.h4,
.h6,
.h7 {
  margin-left: 10px;
  height: 70px;
}
.h5 {
  margin-left: 10px;
  height: 150px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
  .h5radio3 {
    white-space: nowrap;
    margin-bottom: 10px;
    .van-radio {
      height: 20px;
      width: 312px;
      border-radius: 3px;
    }
    .h5radio3Span {
      font-size: 7px;
      white-space: nowrap;
    }
  }
}
.h8 {
  margin-left: 10px;
  height: 90px;
  .h8radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.h9 {
  margin-left: 10px;
  height: 160px;
  .h9radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.h10 {
  margin-left: 10px;
  height: 190px;
  .h10radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.h11,
.h13 {
  margin-left: 10px;
  height: 60px;
}
.h12 {
  margin-left: 10px;
  height: 100px;
  .h12radio {
    display: flex;
    margin-bottom: 10px;
    .van-radio {
      height: 20px;
      width: 95px;
      border-radius: 3px;
    }
  }
}
.h14 {
  margin-left: 10px;
  height: 60px;
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
.h15 {
  margin-left: 10px;
  height: 120px;
  .h15radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.h16 {
  margin-left: 10px;
  height: 90px;
  .h15radio {
    display: flex;
    margin-bottom: 10px;
  }
}

.h17 {
  margin-left: 10px;
  height: 150px;
  .h15radio {
    display: flex;
    margin-bottom: 10px;
  }
}

.h18 {
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

.h19 {
  margin-left: 10px;
  height: 160px;
  .h15radio {
    display: flex;
    margin-bottom: 10px;
  }
}

.c1 {
  margin: 0 0 0 10px;
  height: 100px;
}
.c2,
.c9,
.c10 {
  margin: 20px 0 0 10px;
  height: 180px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}

.c3 {
  margin: 0 0 0 10px;
  height: 60px;
  .levelthird-div {
    margin-left: 20;
    //水平显示的文本
    .levelfill-in {
      display: flex;
      justify-content: flex-start;
      width: 100px;
    }
    //输入框样式
    /deep/ .van-cell {
      padding: 0;
      width: 120px;
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
.c4 {
  margin: 0 0 0 10px;
  height: 60px;
}
.c5 {
  margin: 0 0 0 10px;
  height: 60px;
  .levelthird-div {
    margin: 10px 0px 0px 20px;
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
}
.c6 {
  margin: 0 0 0 10px;
  height: 60px;
  .levelthird-div {
    margin-left: 20px;
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
}
.c7 {
  margin: 0 0 0 10px;
  height: 290px;
  .d7radio {
    margin-top: 10px;
  }
  .radioFive {
    font-size: 7px;
    margin-top: 10px;
  }
  .van-radio {
    height: 20px;
    width: 250px;
    border-radius: 3px;
  }
}
.c8 {
  margin: 0 0 0 10px;
  height: 250px;
  .d8radio {
    margin-top: 10px;
  }
  .radioFive {
    font-size: 7px;
    margin-top: 10px;
  }
  .van-radio {
    height: 20px;
    width: 250px;
    border-radius: 3px;
  }
}
.c11 {
  margin: 20px 0 0 10px;
  height: 180px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.c12 {
  margin: 20px 0 0 10px;
  height: 70px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}

.c13 {
  margin: 20px 0 0 10px;
  height: 80px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
  //输入框样式
  /deep/ .van-cell {
    padding: 0;
    width: 150px;
    height: 13px;
    line-height: 6px;
    background: #f0f0f0;
    border-bottom: 1px solid #000000;
  }
}
.c14 {
  margin: 20px 0 0 10px;
  height: 130px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.c15 {
  margin: 0 0 0 10px;
  height: 170px;
  .d8radio {
    margin-top: 10px;
  }
  .radioFive {
    font-size: 7px;
    margin-top: 10px;
  }
  .van-radio {
    height: 20px;
    width: 250px;
    border-radius: 3px;
  }
}
.c16 {
  margin: 20px 0 0 10px;
  height: 170px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.c17 {
  margin-left: 10px;
  height: 100px;
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
.c18 {
  margin: 0 0 0 10px;
  height: 150px;
  .d8radio {
    margin-top: 10px;
  }
  .radioFive {
    font-size: 7px;
    margin-top: 10px;
  }
  .van-radio {
    height: 20px;
    width: 250px;
    border-radius: 3px;
  }
}
.c19 {
  margin-left: 10px;
  height: 240px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
  .h5radio3 {
    white-space: nowrap;
    margin-bottom: 10px;
    .van-radio {
      height: 20px;
      width: 312px;
      border-radius: 3px;
    }
    .h5radio3Span {
      font-size: 7px;
      white-space: nowrap;
    }
  }
}
.c20 {
  margin-left: 10px;
  height: 80px;
  //单位详细名称输入框样式
  .onetext-info /deep/ .van-cell {
    width: 264px;
  }
  //主要产品或主要业务输入框样式
  .towtext-info /deep/ .van-cell {
    width: 244px;
  }
}
.c21 {
  margin-left: 10px;
  height: 60px;
  //本人从事的具体工作输入框样式
  .onetext-info /deep/ .van-cell {
    width: 242px;
  }
}
.c22 {
  margin-left: 10px;
  height: 100px;
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
.c23 {
  margin: 0 0 0 10px;
  height: 60px;
  .levelthird-div {
    margin: 10px 0px 0px 20px;
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
}
.c24 {
  margin: 0 0 0 10px;
  height: 270px;
  .d8radio {
    margin-top: 10px;
  }
  .radioFive {
    font-size: 7px;
    margin-top: 10px;
  }
  .van-radio {
    height: 20px;
    width: 250px;
    border-radius: 3px;
  }
}
.c25 {
  margin: 0 0 0 10px;
  height: 230px;
  .d8radio {
    margin-top: 10px;
  }
  .radioFive {
    font-size: 7px;
    margin-top: 10px;
  }
  .van-radio {
    height: 20px;
    width: 250px;
    border-radius: 3px;
  }
  .childrenSex {
    display: flex;
    .van-radio {
      height: 20px;
      width: 150px;
      border-radius: 3px;
    }
  }
}
.c26 {
  margin: 20px 0 0 10px;
  height: 140px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.c27 {
  margin: 20px 0 0 10px;
  height: 90px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}
.c28 {
  margin: 20px 0 0 10px;
  height: 170px;
  .h5radio {
    display: flex;
    margin-bottom: 10px;
  }
}
</style>

