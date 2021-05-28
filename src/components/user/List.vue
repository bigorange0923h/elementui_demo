<!-- 用户列表 -->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="编号" width="180">
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top">
            <template #default>
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
            </template>
            <template #reference>
              <div class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="生日" width="180">
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row.bir }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>

      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template #default="scope">
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
    <el-button type="success" style="margin-top: 10px">添加</el-button>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tableData: [
        {
          id: 1,
          bir: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
        {
          id: 2,
          bir: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
        {
          id: 3,
          bir: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
        {
          id: 4,
          bir: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  components: {},
  created() {},
};
</script>

<style  scoped>
</style>
