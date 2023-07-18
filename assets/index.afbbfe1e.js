import{n as a,r as m,bF as t,j as r,bG as e,L as c,cg as s,a0 as b,a1 as n,a3 as i}from"./index.3706b7ab.js";import{B as l}from"./index.63f1591f.js";import{C as d}from"./index.cb54708d.js";import"./code.c10c1b08.js";const u=()=>a(m.exports.Fragment,{children:[a(t,{listClassName:"breadcrumb-slash",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-dots",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-dashes",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-pipes",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-chevron",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]})]}),o=()=>r(m.exports.Fragment,{children:a(t,{children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]})}),h=()=>a(m.exports.Fragment,{children:[r("div",{className:"d-flex justify-content-start breadcrumb-wrapper",children:a(t,{className:"ms-1",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{children:r("span",{children:" Data "})})]})}),r("div",{className:"d-flex justify-content-center breadcrumb-wrapper my-1",children:a(t,{children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{children:r("span",{children:" Data "})})]})}),r("div",{className:"d-flex justify-content-end breadcrumb-wrapper",children:a(t,{className:"me-1",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{className:"pe-1",children:r("span",{children:" Data "})})]})})]}),B=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsDefault = () => {
  return (
    <React.Fragment>
      <Breadcrumb className='ms-1'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}
export default BreadcrumbsDefault
    `})}),p=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsStyles = () => {
  return (
    <React.Fragment>
      <Breadcrumb className='breadcrumb-slash'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-dots'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-dashes'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-pipes'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-chevron'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}
export default BreadcrumbsStyles

      `})}),L=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsAlignment = () => {
  return (
    <React.Fragment>
      <div className='justify-content-start breadcrumb-wrapper'>
        <Breadcrumb className='ms-1'>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='justify-content-center breadcrumb-wrapper'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='justify-content-end breadcrumb-wrapper'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </React.Fragment>
  )
}
export default BreadcrumbsAlignment

      `})}),g=()=>(m.exports.useEffect(()=>{s.highlightAll()},[]),a(m.exports.Fragment,{children:[r(l,{title:"Breadcrumbs",data:[{title:"Components"},{title:"Breadcrumbs"}]}),a(b,{children:[r(n,{sm:"12",children:a("section",{id:"component-breadcrumbs",children:[r(d,{title:"Default",code:B,children:r(o,{})}),a(d,{title:"Styles",code:p,children:[a(i,{children:["These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing"," ",r("code",{children:"$breadcrumb-divider"})," variable value in scss"]}),r(u,{})]})]})}),r(n,{sm:"12",children:r("section",{id:"breadcrumb-alignment",children:a(d,{title:"Alignment",code:L,children:[a(i,{children:["Use class ",a("code",{children:[".justify-content-","{position}"]})," to align breadcrumb to desired position."]}),r(h,{})]})})})]})]}));export{g as default};
