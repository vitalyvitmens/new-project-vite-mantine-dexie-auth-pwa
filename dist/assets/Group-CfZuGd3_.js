import{r as $,f as j,u as B,g as u,a as N,R as S,B as _,c as z}from"./index-D3ij2PvK.js";function E(r){return $.Children.toArray(r).filter(Boolean)}var d={root:"m-4081bf90"};const O={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},P=z((r,{grow:s,preventGrowOverflow:e,gap:t,align:o,justify:a,wrap:l},{childWidth:n})=>({root:{"--group-child-width":s&&e?n:void 0,"--group-gap":u(t),"--group-align":o,"--group-justify":a,"--group-wrap":l}})),g=j((r,s)=>{const e=B("Group",O,r),{classNames:t,className:o,style:a,styles:l,unstyled:n,children:f,gap:h,align:W,justify:b,wrap:A,grow:m,preventGrowOverflow:F,vars:y,variant:v,__size:w,mod:G,...x}=e,c=E(f),i=c.length,p=u(h??"md"),C={childWidth:`calc(${100/i}% - (${p} - ${p} / ${i}))`},R=N({name:"Group",props:e,stylesCtx:C,className:o,style:a,classes:d,classNames:t,styles:l,unstyled:n,vars:y,varsResolver:P});return S.createElement(_,{...R("root"),ref:s,variant:v,mod:[{grow:m},G],size:w,...x},c)});g.classes=d;g.displayName="@mantine/core/Group";export{g as G};