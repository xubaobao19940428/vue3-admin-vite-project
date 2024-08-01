<template>
    <div class="container">
        <div>
            <el-button type="primary" @click="insertText">插入文本</el-button>
            <el-button type="primary" @click="printHtml">打印html</el-button>
            <el-button type="primary" @click="disable">禁止使用</el-button>
        </div>
        <div style="border: 1px solid #ccc; margin-top: 10px">
            <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" style="border-bottom: 1px solid #ccc" />
            <Editor
                :defaultConfig="editorConfig"
                :mode="mode"
                :model-value="valueHtml"
                style="height: 400px; overflow-y: hidden"
                @onCreated="handleCreated"
                @onChange="handleChange"
                @onDestroyed="handleDestroyed"
                @onFocus="handleFocus"
                @onBlur="handleBlur"
                @customAlert="customAlert"
                @customPaste="customPaste"
            />
        </div>
        <div style="margin-top: 10px">
            <textarea v-model="valueHtml" readonly style="width: 100%; height: 200px; outline: none"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted, defineComponent } from 'vue'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default defineComponent({
    name:"wangEditor",
    components: { Editor, Toolbar },
    setup() {
        // 编辑器实例，必须用 shallowRef，重要！
        const editorRef = shallowRef<any>(null)

        // 内容 HTML
        const valueHtml = ref<string>('<p>hello</p>')

        // 模拟 ajax 异步获取内容
        onMounted(() => {
            setTimeout(() => {
                valueHtml.value = '<p>模拟 Ajax 1异步设置内容</p>'
            }, 1500)
        })

        const toolbarConfig = {
            // toolbarKeys: [
            //     'headerSelect',
            //     // 分割线
            //     '|',
            //     // 菜单 key
            //     'fontSize',
            //     'fontFamily',
            //     'lineHeight',
            //     '|',
            //     'color',
            //     'bgColor',
            //     'clearStyle',
            //     '|',
            //     'justifyLeft',
            //     'justifyCenter',
            //     'justifyRight',
            //     'justifyJustify',
            //     '|',
            //     'bold',
            //     'italic',
            //     '|',
            //     'divider',
            //     'bulletedList',
            //     'numberedList',
            //     'enter',
            //     '|',
            //     'redo',
            //     'undo',
            // ],
        }
        const editorConfig = { placeholder: '请输入内容...' }

        // 组件销毁时，也及时销毁编辑器，重要！
        onBeforeUnmount(() => {
            const editor = editorRef.value
            if (editor == null) return

            editor.destroy()
        })

        // 编辑器回调函数
        const handleCreated = (editor: any) => {
            console.log('created', editor)
            editorRef.value = editor // 记录 editor 实例，重要！
        }
        const handleChange = (editor: any) => {
            console.log('change:', editor.getHtml())
        }
        const handleDestroyed = (editor: any) => {
            console.log('destroyed', editor)
        }
        const handleFocus = (editor: any) => {
            console.log('focus', editor)
        }
        const handleBlur = (editor: any) => {
            console.log('blur', editor)
        }
        const customAlert = (info: string, type: string) => {
            alert(`【自定义提示】${type} - ${info}`)
        }
        const customPaste = (editor: any, event: ClipboardEvent, callback: (val: boolean) => void) => {
            console.log('ClipboardEvent 粘贴事件对象', event)

            // 自定义插入内容
            editor.insertText('xxx')

            // 返回值（注意，vue 事件的返回值，不能用 return）
            callback(false) // 返回 false ，阻止默认粘贴行为
            // callback(true); // 返回 true ，继续默认的粘贴行为
        }

        const insertText = () => {
            const editor = editorRef.value
            if (editor == null) return

            editor.insertText('hello world')
        }

        const printHtml = () => {
            const editor = editorRef.value
            if (editor == null) return
            console.log(editor.getHtml())
        }

        const disable = () => {
            const editor = editorRef.value
            if (editor == null) return
            editor.disable()
        }

        return {
            editorRef,
            mode: 'default',
            valueHtml,
            toolbarConfig,
            editorConfig,
            handleCreated,
            handleChange,
            handleDestroyed,
            handleFocus,
            handleBlur,
            customAlert,
            customPaste,
            insertText,
            printHtml,
            disable,
        }
    },
})
</script>
