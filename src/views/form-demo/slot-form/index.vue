<template>
  <div>
    <el-alert
      effect="dark"
      :closable="false"
      title="基于 Element 的 Form 组件进行二次封装，实现数据驱动，支持所有 Form 参数 -- 基础表单"
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
  </div>
</template>

<script setup lang="ts" name="SlotForm">
import { unref } from 'vue'
import { useForm } from '@/hooks/web/useForm'
const { register, formRef, formData } = useForm()

const requiredRule: {
  required: boolean
  message: string
} = {
  required: true,
  message: '该项为必填项'
}

const formSchema: FormSchemaConfig[] = [
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
    field: 'field18',
    component: 'Divider',
    colProps: {
      span: 24
    }
  },
  {
    field: 'field7',
    label: '计数器',
    formItemProps: {
      rules: [requiredRule]
    },
    value: 1,
    component: 'InputNumber',
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field8',
    label: '选择器',
    value: '',
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'Select',
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
    field: 'field9',
    label: '级联选择器',
    value: [],
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'Cascader',
    options: [
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
      },
      {
        value: 'zujian',
        label: '组件',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout 布局'
              },
              {
                value: 'color',
                label: 'Color 色彩'
              },
              {
                value: 'typography',
                label: 'Typography 字体'
              },
              {
                value: 'icon',
                label: 'Icon 图标'
              },
              {
                value: 'button',
                label: 'Button 按钮'
              }
            ]
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio 单选框'
              },
              {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              },
              {
                value: 'input',
                label: 'Input 输入框'
              },
              {
                value: 'input-number',
                label: 'InputNumber 计数器'
              },
              {
                value: 'select',
                label: 'Select 选择器'
              },
              {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              },
              {
                value: 'switch',
                label: 'Switch 开关'
              },
              {
                value: 'slider',
                label: 'Slider 滑块'
              },
              {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              },
              {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              },
              {
                value: 'upload',
                label: 'Upload 上传'
              },
              {
                value: 'rate',
                label: 'Rate 评分'
              },
              {
                value: 'form',
                label: 'Form 表单'
              }
            ]
          },
          {
            value: 'data',
            label: 'Data',
            children: [
              {
                value: 'table',
                label: 'Table 表格'
              },
              {
                value: 'tag',
                label: 'Tag 标签'
              },
              {
                value: 'progress',
                label: 'Progress 进度条'
              },
              {
                value: 'tree',
                label: 'Tree 树形控件'
              },
              {
                value: 'pagination',
                label: 'Pagination 分页'
              },
              {
                value: 'badge',
                label: 'Badge 标记'
              }
            ]
          },
          {
            value: 'notice',
            label: 'Notice',
            children: [
              {
                value: 'alert',
                label: 'Alert 警告'
              },
              {
                value: 'loading',
                label: 'Loading 加载'
              },
              {
                value: 'message',
                label: 'Message 消息提示'
              },
              {
                value: 'message-box',
                label: 'MessageBox 弹框'
              },
              {
                value: 'notification',
                label: 'Notification 通知'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'menu',
                label: 'NavMenu 导航菜单'
              },
              {
                value: 'tabs',
                label: 'Tabs 标签页'
              },
              {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              },
              {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              },
              {
                value: 'steps',
                label: 'Steps 步骤条'
              }
            ]
          },
          {
            value: 'others',
            label: 'Others',
            children: [
              {
                value: 'dialog',
                label: 'Dialog 对话框'
              },
              {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              },
              {
                value: 'popover',
                label: 'Popover 弹出框'
              },
              {
                value: 'card',
                label: 'Card 卡片'
              },
              {
                value: 'carousel',
                label: 'Carousel 走马灯'
              },
              {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }
            ]
          }
        ]
      },
      {
        value: 'ziyuan',
        label: '资源',
        children: [
          {
            value: 'axure',
            label: 'Axure Components'
          },
          {
            value: 'sketch',
            label: 'Sketch Templates'
          },
          {
            value: 'jiaohu',
            label: '组件交互文档'
          }
        ]
      }
    ],
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field10',
    label: '开关',
    value: false,
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'Switch',
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field12',
    label: '时间选择器',
    value: '',
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'TimePicker',
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field13',
    label: '日期选择器',
    value: '',
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'DatePicker',
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field14',
    label: '日期时间选择器',
    value: '',
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'DatePicker',
    componentProps: {
      type: 'datetime'
    },
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field15',
    label: '评分',
    value: 1,
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'Rate',
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field16',
    label: '颜色选择器',
    value: '',
    formItemProps: {
      rules: [requiredRule]
    },
    component: 'ColorPicker',
    onChange: (item) => {
      console.log(item)
    }
  },
  {
    field: 'field17',
    label: '穿梭框',
    value: [],
    formItemProps: {
      rules: [requiredRule]
    },
    options: [
      {
        label: '备选项1',
        value: '1',
        key: '1'
      },
      {
        label: '备选项2',
        value: '2',
        key: '2'
      },
      {
        label: '备选项3',
        value: '3',
        key: '3',
        disabled: true
      }
    ],
    component: 'Transfer',
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
]

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
</script>

<style></style>
