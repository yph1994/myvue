<template>
  <div>
    <el-button @click="control">wode</el-button>
    <el-button @click="test">测试</el-button>
    <el-table
    ref="mytable"
      :height="tableheight"
      :data="tableData.filter((data) => data.name.indexOf(filter) != -1)"
      style="width: 100%"
      v-if="this.show"
      @mousedown.native="mousedown"
      @mouseup.native="mouseup"
    >
      <el-table-column label="日期" width="180">
        <template #header>
          <span>wode</span>
          <el-popover trigger="click" placement="bottom" popper-class="myprop">
            <el-select
              v-model="myvalue"
              placeholder="请选择"
              @change="dataFilter"
              multiple
            >
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
            <i slot="reference" class="el-icon-time" v-show="iconShow"></i>
            <i slot="reference" class="el-icon-arrow-up" v-show="!iconShow"></i>
          </el-popover>
        </template>
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
          <!-- <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover> -->
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作1111" :filters='arr' :filter-method="filter" filter-multiple> -->
      <el-table-column label="操作1111">
        <template slot-scope="scope">
          <!-- <el-select v-model="myvalue" placeholder="请选择"  @change='dataFilter' multiple>
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            > 
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select> -->
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import $ from jquery;
export default {
  name: "name",
  data() {
    return {
      tableheight: 150,
      filter: "i",
      // arr:[{text:"北京",value:'Beijing'},{text:"上海",value:'Shanghai'},{text:"上海",value:'Nanjing'}]
      show: true,
      myvalue: [],
      iconShow: true,
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],

      tableData: [
        {
          date: "2016-05-02",
          name: "Beijing",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "Shanghai",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "Nanjing",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "Guangzhou",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  computed: {
    arr: function () {
      let array = [];
      for (let data of this.tableData) {
        array.push({ text: data.name, value: data.name });
      }
      return array;
    },
  },
  mounted() {
    console.log("fsdfsdfs",$(".el-table"))
    var targetNode = document.querySelector(".el-table");
    console.log("fsdfsdfs",targetNode)
    console.log("开始监听")
    // 设置observer的配置选项
    var config = { attributes: true};
// var config = { attributes: true, childList: true, subtree: true };
    // 当节点发生变化时的需要执行的函数
    var callback = function (mutationsList, observer) {
      console.log("mutationsList",mutationsList)
      for (var mutation of mutationsList) {
        // if (mutation.type == "childList") {
        //   console.log("A child node has been added or removed.");
        // } else if (mutation.type == "attributes") {
        //   console.log(
        //     "The " + mutation.attributeName + " attribute was modified."
        //   );
        // }
        console.log("mutation",mutation)
      }
    };

    // 创建一个observer示例与回调函数相关联
    var observer = new MutationObserver(callback);

    //使用配置文件对目标节点进行观测
    observer.observe(targetNode, config);

    // 停止观测
    // observer.disconnect();
    console.log("fadfaafda", this.$route.params);
  },
  methods: {
    test() {
      //   console.log($(".el-table-filter__bottom button"))
      //   $($(".el-table-filter__bottom button")[0]).trigger('click')
      //   let _this=this
      //   setTimeout(function(){
      //   console.log("tabledata",this)
      //   console.log("tabledata",_this.tableData)
      // },3000)
      //   console.log(this)
      this.filter = "Shanghai";
      console.log("filter", this.tableData);
    },
    mousedown(ev) {
      console.log("mousedown", ev);
      console.log("this", this);
    },
    mouseup(ev) {
      console.log("mouseup", ev);
    },
    // filter(value, row, column){
    //   console.log("dasda",row)
    //   return row.name === value
    // },
    control() {
      //  this.show=false
      // this.$nextTick(()=>{

      //   this.tableData.splice(4,1,{
      //     date: "2016-05-04",
      //     name: "shnss",
      //     address: "上海市普陀区金沙江路 1517 弄",
      //   },)
      //     this.show=true
      //   this.$forceUpdate()
      //  console.log(this)
      // })
      this.filter = "i";
      console.log("guolv", this.tableData);
    },
    handleEdit(index, row) {
      this.tableheight += 1;
      console.log(this.tableheight);
      console.log(this);
      console.log(index, row);
    },
    handleDelete(index, row) {
      debugger
      this.$refs.mytable.bodyWrapper.scrollTop =this.$refs.mytable.bodyWrapper.scrollHeight
      this.tableData.splice(index, 1);
      console.log(index, row);
    },
    dataFilter(value) {
      let truevalue = value[0];
      console.log("vluefa", value[0]);
      this.tableData = this.tableData.filter(this.filterdata(truevalue));
      console.log("fadfaf", this.myvalue);
      console.log("fadfaf气死");

      // console.log(value)
      // let tableDatas=this.tableData
      // let datas=[]
      // for(var i=0;i<tableDatas.length;i++){
      //     if(tableDatas[i].name==value){
      //      datas.push(tableDatas[i])
      //      console.log("fadf",datas)
      //     }
      //   }
      // this.tableData=datas
      // this.$forceUpdate()
      // this.tableData=this.tableData.filter(this.check(value))
    },
    filterdata(value) {
      return function (tableData) {
        return tableData.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      };
    },
  },
};
</script>
<style >
.el-popover {
  width: 200px;
}
.el-checkbox__label {
  line-height: 50px;
}
</style>