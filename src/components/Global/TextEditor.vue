<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <v-card-title class=" my-0 py-0 grey lighten-4">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    :color="isActive.paragraph() === true ? 'grey lighten-2' : ''"
                    v-on="on"
                    @click="commands.paragraph"
                  >
                    <v-icon>mdi-format-paragraph</v-icon>
                  </v-btn>
                </template>
                <span>Paragraph</span>
              </v-tooltip>

              <v-btn
                icon
                :color="isActive.heading({ level: 1 }) === true ? 'grey lighten-2' : ''"
                @click="commands.heading({ level: 1 })"
              >
                <v-icon>mdi-format-header-1</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.heading({ level: 2 }) === true ? 'grey lighten-2' : ''"
                @click="commands.heading({ level: 2 })"
              >
                <v-icon>mdi-format-header-2</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.heading({ level: 3 }) === true ? 'grey lighten-2' : ''"
                @click="commands.heading({ level: 3 })"
              >
                <v-icon>mdi-format-header-3</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.bold() === true ? 'grey lighten-2' : ''"
                @click="commands.bold"
              >
                <v-icon>mdi-format-bold</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.italic() === true ? 'grey lighten-2' : ''"
                @click="commands.italic"
              >
                <v-icon>mdi-format-italic</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.strike() === true ? 'grey lighten-2' : ''"
                @click="commands.strike"
              >
                <v-icon>mdi-format-strikethrough</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.underline() === true ? 'grey lighten-2' : ''"
                @click="commands.underline"
              >
                <v-icon>mdi-format-underline</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.code() === true ? 'grey lighten-2' : ''"
                @click="commands.code"
              >
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.link() === true ? 'grey lighten-2' : ''"
                @click="showLinkPrompt(commands.link)"
              >
                <v-icon>mdi-link</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.image() === true ? 'grey lighten-2' : ''"
                @click="showImagePrompt(commands.image)"
              >
                <v-icon>mdi-image</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.bullet_list() === true ? 'grey lighten-2' : ''"
                @click="commands.bullet_list"
              >
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.ordered_list() === true ? 'grey lighten-2' : ''"
                @click="commands.ordered_list"
              >
                <v-icon>mdi-format-list-numbered</v-icon>
              </v-btn>

              <v-btn
                icon
                @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: true })"
              >
                <v-icon>mdi-table-plus</v-icon>
              </v-btn>

              <template v-if="isActive.table()">
                <v-btn
                  icon
                  @click="commands.deleteTable"
                >
                  <v-icon>mdi-table-remove</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="commands.addColumnBefore"
                >
                  <v-icon>mdi-table-column-plus-before</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="commands.addColumnAfter"
                >
                  <v-icon>mdi-table-column-plus-after</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="commands.deleteColumn"
                >
                  <v-icon>mdi-table-column-remove</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="commands.addRowBefore"
                >
                  <v-icon>mdi-table-row-plus-before</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="commands.addRowAfter"
                >
                  <v-icon>mdi-table-row-plus-after</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="commands.deleteRow"
                >
                  <v-icon>mdi-table-row-remove</v-icon>
                </v-btn>
                <v-btn
                  icon
                  @click="commands.toggleCellMerge"
                >
                  <v-icon>mdi-table-column-width</v-icon>
                </v-btn>
              </template>

              <v-btn
                icon
                :color="isActive.blockquote() === true ? 'grey lighten-2' : ''"
                @click="commands.blockquote"
              >
                <v-icon>mdi-format-quote-close</v-icon>
              </v-btn>

              <v-btn
                icon
                :color="isActive.code_block() === true ? 'grey lighten-2' : ''"
                @click="commands.code_block"
              >
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>

              <v-btn
                icon
                @click="commands.horizontal_rule"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <v-btn
                icon
                @click="commands.undo"
              >
                <v-icon>mdi-undo</v-icon>
              </v-btn>

              <v-btn
                icon
                @click="commands.redo"
              >
                <v-icon>mdi-redo</v-icon>
              </v-btn>
            </v-card-title>
          </editor-menu-bar>
          <v-container grid-list-xs>
            <editor-content :editor="editor" />
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  Image,
  OrderedList,
  Placeholder,
  BulletList,
  ListItem,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
export default {
  components: {
    Editor,
    EditorContent,
    EditorMenuBar,
  },
  props: ['html'],
  data() {
    return {
      edit: false,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new Image(),
          new ListItem(),
          new OrderedList(),
          new Placeholder(),
          new Table({
            resizable: true,
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: this.html,
          onInit: (val) => {
            console.log();
          },
          onUpdate: ({ getJSON, getHTML }) => {
            this.json = getJSON()
            this.getHtml = getHTML()
          },
      }),
      htmlEdit: ''
    }
  },
  computed: {

  },
  methods: {
    passDatatoParent(event) {
      this.$emit('clicked', this.getHtml)
    },
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    showLinkPrompt(command) {
      const src = prompt('Enter the url here')
      if (src !== null) {
        command({ href: src })
      }
    },
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  mounted() {
    this.getHtml = this.html
  }
}
</script>

<style lang="scss" scoped>
::v-deep .ProseMirror-focused {
  outline-color: transparent;
}

::v-deep table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

::v-deep th {
  font-weight: 500;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
}

::v-deep td {
  font-weight: 500;
  font-size: 12px;
}

::v-deep th, ::v-deep td {
  min-width: 1em;
  border: 2px solid #000;
  padding: 3px 5px;
  vertical-align: top;
  box-sizing: border-box;
  position: relative;
  > * {
    margin-bottom: 0;
  }
}

::v-deep td p {
  margin-bottom: 0px;
}

::v-deep th p {
  margin-bottom: 0px;
}

::v-deep pre code {
  padding: 0.7rem 1rem;
  border-radius: 5px;
  background: #000;
  color: #FFF;
  font-size: 0.8rem;
  overflow-x: auto;
  display: block;
}

::v-deep p code {
  display: inline-block;
  padding: 0 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  background: rgba(#000, 0.1);
  color: rgba(#000, 0.8);
}

::v-deep .tableWrapper {
  margin: 1em 0;
  overflow-x: auto;
}

::v-deep .resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>
