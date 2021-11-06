<template>
  <div>
    <el-alert
      effect="dark"
      :closable="false"
      title="基于 Element 的 Form 组件进行二次封装，实现数据驱动，支持所有 Form 参数 -- 异步表单"
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
    <el-button @click="setFormProp">模拟异步options</el-button>
  </div>
</template>

<script setup lang="ts" name="AsyncForm">
import { unref, ref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
const { register, formRef, formData, setProps } = useForm()

const requiredRule: {
  required: boolean
  message: string
} = {
  required: true,
  message: '该项为必填项'
}

const formSchema = ref<FormSchemaConfig[]>([
  {
    field: 'field8',
    label: '选择器',
    value: '',
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'Select',
    options: [],
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field9',
    label: '级联选择器',
    value: [],
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'Cascader',
    options: [],
    onChange: (item) => {
      console.log(item)
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

function setFormProp() {
  setProps(
    'field8',
    [
      {
        label: '选项1',
        value: '1'
      },
      {
        label: '选项2',
        value: '2'
      }
    ],
    'options'
  )

  setProps(
    'field9',
    [
      {
        value: 'zhinan',
        label: '指南',
        children: [
          {
            value: 'shejiyuanze',
            label: '设计原则',
            children: [
              {
                value: 'yizhi',
                label: '一致'
              },
              {
                value: 'fankui',
                label: '反馈'
              },
              {
                value: 'xiaolv',
                label: '效率'
              },
              {
                value: 'kekong',
                label: '可控'
              }
            ]
          },
          {
            value: 'daohang',
            label: '导航',
            children: [
              {
                value: 'cexiangdaohang',
                label: '侧向导航'
              },
              {
                value: 'dingbudaohang',
                label: '顶部导航'
              }
            ]
          }
        ]
      }
    ],
    'options'
  )

  setProps(
    'field19',
    [
      {
        value: 'zhinan',
        label: '指南',
        children: [
          {
            value: 'shejiyuanze',
            label: '设计原则',
            children: [
              {
                value: 'yizhi',
                label: '一致'
              },
              {
                value: 'fankui',
                label: '反馈'
              },
              {
                value: 'xiaolv',
                label: '效率'
              },
              {
                value: 'kekong',
                label: '可控'
              }
            ]
          }
        ]
      }
    ],
    'options'
  )
}
</script>

<style></style>
