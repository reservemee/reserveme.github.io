import{n as s,a0 as d,j as e,a1 as o,d0 as a,d1 as t,d2 as r,cm as T,$ as m,r as n,cg as u,a3 as l}from"./index.6fe50bb5.js";import{C as h}from"./index.4767a436.js";import{B as g}from"./index.95590a07.js";import"./code.3c126f3c.js";const p=""+new URL("transparent.7400a7a9.svg",import.meta.url).href,c=e("button",{type:"button",className:"ms-1 btn-close"}),y=()=>s(d,{children:[e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-primary my-2 rounded",children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on a primary background \u2014 check it out!"})]})})}),e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-secondary my-2 rounded",children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on a secondary background \u2014 check it out!"})]})})}),e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-success my-2 rounded",children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on a success background \u2014 check it out!"})]})})}),e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-danger my-2 rounded",children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on a danger background \u2014 check it out!"})]})})}),e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-warning my-2 rounded",children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on a warning background \u2014 check it out!"})]})})}),e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-info my-2 rounded",children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on an info background \u2014 check it out!"})]})})}),e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-dark my-2 rounded",children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on an dark background \u2014 check it out!"})]})})}),e(o,{md:"6",sm:"12",children:e("div",{className:"p-3 my-2 rounded",style:{background:`url(${p})`},children:s(a,{children:[e(t,{close:c,children:"ReserveMe"}),e(r,{children:"This is a toast on a transparent background \u2014 check it out!"})]})})})]}),v=e("img",{src:m,width:"30",height:"30"}),i=e("button",{type:"button",className:"ms-1 btn-close"}),k=()=>s(d,{className:"demo-vertical-spacing",children:[e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:"primary",children:"ReserveMe"}),e(r,{children:"This is a toast with a primary icon \u2014 check it out!"})]})}),e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:"success",children:"ReserveMe"}),e(r,{children:"This is a toast with a success icon \u2014 check it out!"})]})}),e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:"info",children:"ReserveMe"}),e(r,{children:"This is a toast with a info icon \u2014 check it out!"})]})}),e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:"danger",children:"ReserveMe"}),e(r,{children:"This is a toast with a danger icon \u2014 check it out!"})]})}),e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:"warning",children:"ReserveMe"}),e(r,{children:"This is a toast with a warning icon \u2014 check it out!"})]})}),e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:"dark",children:"ReserveMe"}),e(r,{children:"This is a toast with a dark icon \u2014 check it out!"})]})}),e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:e(T,{size:"sm",color:"primary"}),children:"ReserveMe"}),e(r,{children:"This is a toast with a spinner \u2014 check it out!"})]})}),e(o,{md:"6",sm:"12",children:s(a,{children:[e(t,{close:i,icon:v,children:"ReserveMe"}),e(r,{children:"This is a toast with a logo \u2014 check it out!"})]})})]}),b=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Toast, ToastBody, ToastHeader, Row, Col } from 'reactstrap'
import transparentBg from '@src/assets/images/svg/transparent.svg'

const close = (
  <button type='button' className='ms-1 btn-close'>
    <span>\xD7</span>
  </button>
)

const ToastTranslucent = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <div className='p-3 bg-primary my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on a primary background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-secondary my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on a secondary background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-success my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on a success background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-danger my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on a danger background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-warning my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on a warning background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-info my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on an info background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>

      <Col md='6' sm='12'>
        <div className='p-3 bg-dark my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on an dark background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>

      <Col md='6' sm='12'>
        <div
          className='p-3 my-2 rounded'
          style={{
            background: "url(transparentBg)"
          }}
        >
          <Toast>
            <ToastHeader close={close}>ReserveMe</ToastHeader>
            <ToastBody>
              This is a toast on a transparent background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
    </Row>
  )
}
export default ToastTranslucent
`})}),C=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Toast, ToastBody, ToastHeader, Spinner, Row, Col } from 'reactstrap'
import logo from '@src/assets/images/logo/logo.png'

const close = (
  <button type='button' className='ms-1 btn-close'>
    <span>\xD7</span>
  </button>
)


const ToastHeaderIcons = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='primary'>ReserveMe</ToastHeader>
          <ToastBody>
            This is a toast with a primary icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='success'>ReserveMe</ToastHeader>
          <ToastBody>
            This is a toast with a success icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='info'>ReserveMe</ToastHeader>
          <ToastBody>
            This is a toast with a info icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='danger'>ReserveMe</ToastHeader>
          <ToastBody>
            This is a toast with a danger icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='warning'>ReserveMe</ToastHeader>
          <ToastBody>
            This is a toast with a warning icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='dark'>ReserveMe</ToastHeader>
          <ToastBody>
            This is a toast with a dark icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>

      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon={<Spinner size='sm' color='primary' />}>
          ReserveMe
          </ToastHeader>
          <ToastBody>This is a toast with a spinner \u2014 check it out!</ToastBody>
        </Toast>
      </Col>

      <Col md='6' sm='12'>
        <Toast>
        <ToastHeader close={close} icon={logo}>ReserveMe</ToastHeader>
          <ToastBody>This is a toast with a logo \u2014 check it out!</ToastBody>
        </Toast>
      </Col>
    </Row>
  )
}
export default ToastHeaderIcons
`})}),M=()=>(n.exports.useEffect(()=>{u.highlightAll()},[]),s(n.exports.Fragment,{children:[e(g,{title:"Toasts",data:[{title:"Components"},{title:"Toasts"}]}),s(d,{className:"match-height",children:[e(o,{sm:"12",children:s(h,{title:"Toast Translucent",code:b,children:[e(l,{children:"Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the backdrop-filter CSS property, we\u2019ll also attempt to blur the elements under a toast."}),e(y,{})]})}),e(o,{sm:"12",children:s(h,{title:"Icons",code:C,children:[s(l,{children:["Use ",e("code",{children:"icon"})," attribute with ",e("code",{children:"ToastHeader"})," tag to add an icon."]}),e(k,{})]})})]})]}));export{M as default};
