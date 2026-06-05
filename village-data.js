window.VILLAGE_DATA = {
  road:{material:'asphalt',color1:'#6b7280',color2:'#4b5563'},pond:{visible:true,fishCount:6,fishSpeed:1.0},
  cat:{x:-2.2,z:3.9,targetX:2.0,targetZ:2.0,speed:0.75,mode:'idle',timer:1.5},avatar:{x:0.2,z:3.45,carry:'none'},
  buildings:[
    {id:'lab',type:'lab',name:'Research Lab',icon:'🧪',desc:'연구 프로젝트, 논문, 발표 자료를 담아두는 공간입니다.',x:-3.6,z:-1.9,scale:1.05,rot:0,locked:false},
    {id:'school',type:'school',name:'Medical School',icon:'🎓',desc:'학력, 전공, 연구실 이력을 보여주는 공간입니다.',x:3.6,z:-1.8,scale:1.08,rot:0,locked:false},
    {id:'gallery',type:'gallery',name:'Gallery',icon:'🖼️',desc:'포스터, Figure, 발표 자료를 전시하는 공간입니다.',x:-4.9,z:2.9,scale:0.95,rot:0,locked:false},
    {id:'house',type:'house',name:'About House',icon:'🏡',desc:'자기소개, 관심사, 취미를 담는 공간입니다.',x:0.0,z:5.15,scale:0.98,rot:0,locked:false},
    {id:'post',type:'post',name:'Contact Post',icon:'✉️',desc:'이메일, GitHub, Scholar, ORCID 등의 링크를 담는 공간입니다.',x:4.9,z:2.9,scale:0.90,rot:0,locked:false}
  ],
  rooms:{
    lab:{heading:'Research / Projects',text:'진행 중인 연구, 실험 설계, 논문, 발표자료를 정리하는 공간입니다. 프로젝트별 폴더, PPT, Excel, 코드 파일을 연결할 수 있습니다.',tags:['ECMO','BIA','Sepsis','Python','PPT'],attachments:[{name:'Research_Project_Summary.pdf',type:'PDF',size:'sample'},{name:'Experiment_Data_Template.xlsx',type:'Excel',size:'sample'}]},
    school:{heading:'Education / Academic History',text:'학력, 전공, 연구실 소속, 지도교수, 학위 과정 정보를 정리하는 공간입니다.',tags:['Master course','Biomedical Science','Medical School'],attachments:[{name:'Academic_CV.pdf',type:'PDF',size:'sample'}]},
    gallery:{heading:'Posters / Figures / Slides',text:'학회 포스터, 발표 슬라이드, Figure, 이미지 자료를 전시하는 공간입니다.',tags:['Poster','Figure','Presentation'],attachments:[{name:'Conference_Poster.pptx',type:'PPT',size:'sample'}]},
    house:{heading:'About Me',text:'자기소개, 관심 분야, 취미, 연구 외 활동을 담는 공간입니다.',tags:['About','Interests','Profile'],attachments:[{name:'Short_Bio.txt',type:'Text',size:'sample'}]},
    post:{heading:'Contact / Links',text:'이메일, GitHub, Google Scholar, ORCID, LinkedIn 등 외부 링크를 모아두는 공간입니다.',tags:['Email','GitHub','Scholar','ORCID'],attachments:[{name:'Contact_Links.url',type:'Link',size:'sample'}]}
  },
  trees:[
    {id:'t1',type:'round',x:-4.95,z:-1.75,scale:.95,rot:0,locked:false},{id:'t2',type:'round',x:-2.55,z:-2.35,scale:.92,rot:0,locked:false},{id:'t3',type:'fruit',x:2.35,z:-2.30,scale:.92,rot:0,locked:false},{id:'t4',type:'round',x:4.85,z:-1.65,scale:.95,rot:0,locked:false},
    {id:'t5',type:'fruit',x:-5.65,z:2.85,scale:.9,rot:0,locked:false},{id:'t6',type:'pine',x:-3.80,z:3.55,scale:.92,rot:0,locked:false},{id:'t7',type:'round',x:2.95,z:3.50,scale:.88,rot:0,locked:false},{id:'t8',type:'round',x:5.65,z:2.80,scale:.9,rot:0,locked:false}
  ],
  lamps:[
    {id:'l1',x:-3.05,z:.78,scale:1,rot:0,locked:false},{id:'l2',x:3.05,z:.78,scale:1,rot:0,locked:false},{id:'l3',x:-1.95,z:-2.05,scale:1,rot:0,locked:false},{id:'l4',x:1.95,z:-2.05,scale:1,rot:0,locked:false},{id:'l5',x:-4.35,z:2.15,scale:1,rot:0,locked:false},{id:'l6',x:4.35,z:2.15,scale:1,rot:0,locked:false}
  ]
};
