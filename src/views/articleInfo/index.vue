<template>
<div id="main">
    <el-form ref="form" :model="sizeForm" label-width="80px" size="max">
        <el-form-item label="标题">
            <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容">
            <mavon-editor v-model="value"/>
        </el-form-item>
        <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>


</div>

</template>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>