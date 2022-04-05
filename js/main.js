instaHistory = [{
        id: 1,
        media: ['https://picsum.photos/id/17/200/300', 'https://picsum.photos/id/267/200/300', 'https://picsum.photos/id/257/200/300'],
        logo: './media/javohir.jpg',
        name: "javohir.coding",
        time: '17h',
        type: 'carousel'
    },
    {
        id: 2,
        media: ['./media/ajr-img-video.jpg','./media/ajr-video.mp4'],
        logo: './media/ajr.jpg',
        name: "ajr_collection",
        time: '3h',
        type: 'video'
    },
    {
        id: 3,

        media: ['https://picsum.photos/id/797/200/300', 'https://picsum.photos/id/27/200/300'],
        logo: './media/muhammad.jpg',
        name: "muhammadali_eshonqulov",
        time: '21h',
        type: 'carousel'
    },
    {
        id: 4,

        media: ['https://picsum.photos/id/878/200/300'],
        logo: './media/fayzulla.jpg',
        name: "feruzallaev",
        time: '9h',
        type: 'img'
    },
    {
        id: 5,

        media: ['./media/img-video.jpg', './media/abdukarim.mp4'],
        logo: './media/abdukarim.jpg',
        name: "abdukarimmirzayev",
        time: '2h',
        type: 'video'
    },


]
let cont = document.querySelector(".row")
instaHistory.forEach((elem) => {
    let wrapper = document.createElement('div')
    wrapper.className = 'history__wrapper'
    wrapper.innerHTML = `<div class="history__line d-none mb-3">
          <div class="line col-4"><span class="compl"></span></div>
          <div class="line col-4"><span class="compl"></span></div>
          <div class="line col-4"><span class="compl"></span></div>
        </div>
        <div class="history__header header d-none align-items-center justify-content-between">
          <div class="header__about d-flex align-items-center">
            <div class="header__img-wrapper me-2">
              <img src="${elem.logo}" alt="logo">
            </div>
            <p class="header__name me-2 ">
              ${elem.name}
            </p>
            <span class="header__time">${elem.time}</span>
          </div>
          <div class="header__ability d-flex">
            <i class="bx bxs-download"></i>
            <i class="bx bx-play"></i>
            <i class="bx bx-volume-mute"></i>
            <i class='bx bx-dots-horizontal-rounded' ></i>
          </div>
        </div>
        <div class="history__media">
        <img src="${elem.media[0]}" alt="">
        </div>
        <div class="history__avatar">
        <div class="history__avatar-img-wrapper">
        <img src="${elem.logo}" alt="logo">
        
        </div>
        <p class="history__name ">
              ${elem.name}
            </p>
            <span class="history__time">${elem.time}</span></div>
        <div class="history__footer footer d-none align-items-center">
          <input type="text" class="footer__input me-3" placeholder="Reply to ${elem.name}...">
          <i class="bx bx-send"></i>  
        </div>
        `
    cont.appendChild(wrapper)

})
    let wrap = document.querySelectorAll('.history__wrapper')
    wrap[0].classList.add('active')
    wrap.forEach((item, idx) => {
        item.addEventListener('click', () => {
        
            if (idx == 1) {
                cont.style.transform = `translate(410px)`
                wrap[1].classList.add('active')
                wrap[2].classList.remove('active')
                wrap[3].classList.remove('active')
                wrap[4].classList.remove('active')
                wrap[0].classList.remove('active')
                
            }
            if (idx == 2) {
                cont.style.transform = `translate(0px)`
                wrap[2].classList.add('active')
                wrap[1].classList.remove('active')
                wrap[3].classList.remove('active')
                wrap[4].classList.remove('active')
                wrap[0].classList.remove('active')
            }
            if (idx == 0) {
                cont.style.transform = `translate(820px)`
                wrap[0].classList.add('active')
                wrap[1].classList.remove('active')
                wrap[2].classList.remove('active')
                wrap[4].classList.remove('active')
                wrap[3].classList.remove('active')
            }
            if (idx == 3) {
                cont.style.transform = `translate(-410px)`
                wrap[3].classList.add('active')
                wrap[1].classList.remove('active')
                wrap[4].classList.remove('active')
                wrap[2].classList.remove('active')
                wrap[0].classList.remove('active')
            }
            if (idx == 4) {
                cont.style.transform = `translate(-820px)`
                wrap[4].classList.add('active')
                wrap[1].classList.remove('active')
                wrap[3].classList.remove('active')
                wrap[2].classList.remove('active')
                wrap[0].classList.remove('active')
            }
        })
    })



