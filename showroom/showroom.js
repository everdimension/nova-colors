const colorValues = require('../src').default

function r(nodeName, props, ...children) {
  const el = document.createElement(nodeName)
  if (props) {
    Object.keys(props).forEach((key) => {
      el[key] = props[key]
    })
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child)
      el.appendChild(textNode)
    } else if (Array.isArray(child)) {
      child.forEach(c => el.appendChild(c))
    } else if (child) {
      el.appendChild(child)
    }
  })

  return el
}

function ColorBlock(bgColor) {
  return r('div', {
    style: `
            display: inline-block;
            height: 80px;
            width: 80px;
            margin: 1.5em;
            border-radius: 10px;
            background: ${bgColor};
          `,
  })
}

function ShowRoom() {
  document.body.style.background = colorValues.grays.gray1
  document.body.style.margin = '100px'

  return (
    r('div', null,
      Object.keys(colorValues.colors).map((colorName) => (
        ColorBlock(colorValues.colors[colorName])
      )),

      r('br'),

      Object.keys(colorValues.grays).map((colorName) => (
        ColorBlock(colorValues.grays[colorName])
      ))
    )
  )
}

document.getElementById('app').appendChild(ShowRoom())
