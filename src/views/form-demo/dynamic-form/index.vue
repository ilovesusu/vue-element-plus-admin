<template>
  <div>
    <el-alert
      effect="dark"
      :closable="false"
      title="基于 Element 的 Form 组件进行二次封装，实现数据驱动，支持所有 Form 参数 -- 动态表单"
      type="info"
      style="margin-bottom: 20px"
    />
    <com-form :schema="formSchema" @register="register">
      <template #field20="{ model, field }">
        <el-input v-model="model[field]" placeholder="请选择日期" @change="slotInputChange">
          <template #suffix>
            <el-icon class="el-input__icon el-icon-date" />
          </template>
        </el-input>
      </template>
    </com-form>
    <el-button @click="submit">验证</el-button>
    <el-button @click="reset">重置</el-button>
    <el-button @click="add1">新增一个(直接修改数组)</el-button>
    <el-button @click="add2">新增一个(使用方法新增)</el-button>
    <el-button @click="del1">删除一个(直接修改数组)</el-button>
    <el-button @click="del2">删除一个(使用方法删除)</el-button>
  </div>
</template>

<script setup lang="ts" name="DynamicForm">
import { unref, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
const { register, formRef, formData, addSchema, delSchema } = useForm()

const requiredRule: {
  required: boolean
  message: string
} = {
  required: true,
  message: '该项为必填项'
}

const formSchema = ref<FormSchemaConfig[]>([
  {
    field: 'field1',
    label: '单选框',
    component: 'Radio',
    value: '1',
    formItemProps: {
      rules: [requiredRule]
    },
    options: [
      {
        label: '选项1',
        value: '1'
      },
      {
        label: '选项2',
        value: '2'
      }
    ],
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field2',
    label: '单选框组',
    value: '',
    component: 'RadioGroup',
    formItemProps: {
      rules: [requiredRule]
    },
    options: [
      {
        label: '选项1',
        value: '1'
      },
      {
        label: '选项2',
        value: '2'
      }
    ],
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field3',
    label: '单选框组',
    value: '',
    component: 'Checkbox',
    formItemProps: {
      rules: [requiredRule]
    },
    options: [
      {
        label: '选项1',
        value: '1'
      }
    ],
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field4',
    label: '多选框组',
    value: [],
    component: 'CheckboxGroup',
    formItemProps: {
      rules: [requiredRule]
    },
    options: [
      {
        label: '选项1',
        value: '1'
      },
      {
        label: '选项2',
        value: '2'
      }
    ],
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field5',
    label: '输入框',
    formItemProps: {
      rules: [requiredRule]
    },
    value: '',
    component: 'Input',
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field6',
    label: '输入框',
    formItemProps: {
      rules: [requiredRule]
    },
    value: '',
    component: 'Input',
    componentProps: {
      type: 'textarea',
      rows: 2,
      placeholder: '请输入内容'
    },
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field20',
    label: '插槽输入框',
    hidden: true,
    formItemProps: {
      rules: [requiredRule]
    }
  }
])

function submit() {
  unref(formRef).validate((valid: boolean) => {
    if (valid) {
      console.log(formData.value)
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

function reset() {
  unref(formRef).resetFields()
}

function slotInputChange(val: string) {
  console.log(val)
}

const num = ref<number>(20)
function add1() {
  formSchema.value.push({
    field: `feild${num.value}`,
    component: 'Input',
    value: '我是新增的',
    label: `我是新增的${num.value}`,
    formItemProps: {
      rules: [requiredRule]
    },
    onChange: (item) => {
      console.log(item)
    }
  })
  num.value = num.value + 1
}

function add2() {
  addSchema(
    {
      field: `feild${num.value}`,
      component: 'Input',
      value: '插入',
      label: `插入${num.value}`,
      formItemProps: {
        rules: [requiredRule]
      },
      onChange: (item) => {
        console.log(item)
      }
    },
    2
  )
  num.value = num.value + 1
}

function del1() {
  formSchema.value.shift()
}

function del2() {
  delSchema(3)
}
</script>

<style></style>
