import React from 'react'

export default function Conditional({ children, show, context, ...props }) {
  const { transientItem } = context
  if (show && !show(transientItem)) {
    return null
  }
  Object.keys(props).forEach(key => (props[key] = props[key](transientItem)))
  return React.Children.map(
    children,
    child => child && React.cloneElement(child, { transientItem, ...props })
  )
}
