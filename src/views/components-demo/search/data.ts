const requiredRule: {
  required: boolean
  message: string
} = {
  required: true,
  message: '该项为必填项'
}
export const data: FormSchemaConfig[] = [
  {
    field: 'field1',
    label: '及时配送',
    component: 'Switch',
    value: true,
    onChange: (item) => {
      console.log(item)
    },
    formItemProps: {
      rules: [requiredRule]
    }
  },
  {
    field: 'field2',
    label: '活动名称',
    component: 'Input',
    onChange: (item) => {
      console.log(item)
    },
    formItemProps: {
      rules: [requiredRule]
    }
  },
  {
    field: 'field3',
    label: '活动区域',
    component: 'Select',
    options: [
      {
        label: '区域一',
        value: 'fujian'
      },
      {
        label: '区域二',
        value: 'beijing'
      }
    ]
  },
  {
    field: 'field4',
    label: '时间选择器',
    value: '',
    component: 'TimePicker'
  },
  {
    field: 'field13',
    label: '日期选择器',
    value: '',
    component: 'DatePicker'
  },
  {
    field: 'field14',
    label: '日期时间选择器',
    value: '',
    component: 'DatePicker',
    componentProps: {
      type: 'datetime'
    }
  }
]
