<template>
  <div>
    <el-alert
      effect="dark"
      :closable="false"
      title="基于 Element 的 Form 组件进行二次封装，实现数据驱动，支持所有 Form 参数 -- 表单项设置"
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
    <el-button @click="setFormProp1">显示隐藏</el-button>
    <el-button @click="setFormProp2">修改label</el-button>
    <el-button @click="setFormProp3">修改col-span</el-button>
  </div>
</template>

<script setup lang="ts" name="SetPropsForm">
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

const hidden = ref<boolean>(false)
function setFormProp1() {
  setProps('field20', !hidden.value, 'hidden')
  hidden.value = !hidden.value
}

const num = ref<number>(1)
function setFormProp2() {
  setProps('field1', `label${num.value}`, 'label')
  num.value = num.value + 1
}

const span = ref<number>(24)
function setFormProp3() {
  setProps('field1', span.value, 'colProps.span')
  span.value = span.value === 24 ? 12 : 24
}
</script>

<style></style>
