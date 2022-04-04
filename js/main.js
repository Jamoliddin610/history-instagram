instaHistory = [{
        id: 1,
        media: ['https://picsum.photos/id/247/200/300', 'https://picsum.photos/id/267/200/300', 'https://picsum.photos/id/257/200/300'],
        logo: './media/javohir.jpg',
        name: "javohir.coding",
        time: '17h',
        type: 'carousel'
    },
    {
        id: 2,
        media: ['./media/ajr-video.mp4'],
        logo: './media/ajr.jpg',
        name: "ajr_collection",
        time: '3h',
        type: 'video'
    },
    {
        id: 3,

        media: ['https://picsum.photos/id/217/200/300', 'https://picsum.photos/id/27/200/300'],
        logo: './media/muhammad.jpg',
        name: "muhammadali_eshonqulov",
        time: '21h',
        type: 'carousel'
    },
    {
        id: 4,

        media: ['https://picsum.photos/id/277/200/300'],
        logo: './media/fayzulla.jpg',
        name: "feruzallaev",
        time: '9h',
        type: 'img'
    },
    {
        id: 5,

        media: ['./media/abdukarim.mp4'],
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
    wrapper.innerHTML = `<div class="history__line d-flex mb-3">
          <div class="line col-4"><span class="compl"></span></div>
          <div class="line col-4"><span class="compl"></span></div>
          <div class="line col-4"><span class="compl"></span></div>
        </div>
        <div class="history__header header d-flex align-items-center justify-content-between">
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
        <div class="history__footer footer d-flex align-items-center">
          <input type="text" class="footer__input me-3" placeholder="Reply to ${elem.name}...">
          <i class="bx bx-send"></i>  
        </div>`
    cont.appendChild(wrapper)
    let media = document.querySelectorAll(".history__media")
    media.forEach((item, ind) => {
        if (elem.type == 'video') {
            if (ind + 1 == elem.id) {
                item.innerHTML = `<video width="100%" height="100%"  src="${elem.media}" autoplay type="video/mp4"></video>`
            }
        }
    });
})
let wrap = document.querySelectorAll('.history__wrapper')
instaHistory.forEach((elem)=>{
    wrap.forEach((item,idx)=>{
        let num = 0
        item.addEventListener('click',()=>{
            if (idx<num) {
                cont.style.transform = 'translate(410px)'
                num=idx
            }
            else if (idx>num) {
                cont.style.transform = 'translate(-410px)'
                num=idx
            }
        })
    })
})

