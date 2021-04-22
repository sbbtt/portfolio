import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '안녕하세요! 신입개발자 이석주입니다.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/19GFwKBkql0yjPlBx1BabP3i-RdOo1EIH/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movieMan.png',
    title: '무비맨',
    info: '개발인원: 1인, 소요기간: 2주',
    info2: '노드와 리액트를 기반으로 제작된 학습용 사이트입니다.프론트엔드 개발자이지만 백엔드의 동작원리를 이해하는데 도움이 되었습니다.' +
    '회원가입이 가능하며, 영화정보를 보여주고 찜 기능으로 찜한 영화를 계정별로 확인 가능합니다.',
    url: 'https://github.com/sbbtt/movieMan',
    repo: 'https://github.com/sbbtt/movieMan', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'petTube.png',
    title: '펫튜브',
    info: '개발인원: 1인, 소요기간: 2주',
    info2: 'MERN 보일러 플레이트를 사용하여 메인페이지, 상세페이지, 회원가입을 통한 좋아요와 댓글 구독기능을 구현하였습니다.',
    url: 'https://github.com/sbbtt/clip',
    repo: 'https://github.com/sbbtt/clip', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coffee_mid.jpeg',
    title: '커피숍 랜딩페이지',
    info: 'HTML, CSS, JS의 기본기를 탄탄히 하고자 만든 스타벅스 클론코딩입니다.',
    info2: '랜딩페이지를 만들며 lodash, gsap, swiper등의 자바스크립트 라이브러리를 사용하였습니다. ',
    url: 'https://keen-leakey-d05b43.netlify.app/',
    repo: 'https://github.com/sbbtt/coffee', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '010-8273-0019',
  btn: '메일 보내기',
  email: 'sbbt@naver.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sbbtt',
      resume: 'https://drive.google.com/file/d/19GFwKBkql0yjPlBx1BabP3i-RdOo1EIH/view?usp=sharing',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
