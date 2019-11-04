// https://jsfiddle.net/4q2ob80d/1/
$output = $("#output")

window.editor = new Quill('#editor', {
  modules: {
    'toolbar': { container: '#toolbar' },
    'link-tooltip': true
  },
  theme: 'snow'
})

$('#toolbar').on 'click', '.custom-ql-katex', (e) ->
  e.preventDefault()
  editor.focus()
  range = editor.getSelection()
  length = editor.getLength()
  if range?
    if range.end is range.start
      end = length
    else
      end = range.end
        
    editor.formatText(range.start, end, 'katex', true)

editor.addFormat 'katex', { tag: 'span', attribute: 'katex' }
editor.addFormat 'markdown', { tag: 'div', attribute: 'markdown' }

editor.on 'text-change', (delta, source) ->
  $output.html editor.getHTML()
  $output.find('[katex="true"]').each (i, e) ->
    $this = $(this)
    formula = $this.text()
    rendered = katex.renderToString("\\displaystyle { #{formula} }")
    $this.html rendered