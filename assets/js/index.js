window.addEventListener("load", () => {
    // Section Menu Active
    var scrollLink = $(".page-scroll");
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 93;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        });
    });
});

/* ============ location study =============*/
let locatStudy = [{
        id: 'A …',
        location: 'Trường Đại học Mở Tp.HCM',
        address: '97 Võ Văn Tần, P. Võ Thị Sáu, Q.3',
        note: 'Các ngành chất lượng cao'
    },
    {
        id: 'ML…',
        location: 'Trường Cao đẳng nghề Nguyễn Trường Tộ',
        address: '02 Mai Thị Lựu, P.Đakao, Q.1',
        note: 'Khoa Kinh tế & Quản lý công'
    },
    {
        id: 'LB…',
        location: 'CS2 – Trường ĐH Mở TP.HCM',
        address: 'Đường cổng 9, KP.1, P. Long Bình Tân, TP.Biên Hòa',
        note: 'Học quân sự'
    },
    {
        id: 'BD…',
        location: 'CS3 – Trường ĐH Mở TP.HCM',
        address: '68 Lê Thị Trung, Phường Phú Lợi, TP. Thủ Dầu Một',
        note: 'Khu thực hành khoa công nghệ sinh học'
    },
    {
        id: 'HH…',
        location: 'Cơ sở Hồ Hảo Hớn – Trường ĐH Mở TP.HCM',
        address: '35-37 Hồ Hảo Hớn, P. Cô Giang, Q.1',
        note: 'Học anh văn và các môn khác'
    },
    {
        id: 'NK...',
        location: 'Cơ sở Nguyễn Kiệm – Trường ĐH Mở TP.HCM',
        address: '371 Nguyễn Kiệm, Q.Gò Vấp',
        note: 'Các ngành đại trà'
    },
    {
        id: 'HOBOI...',
        location: 'Cung văn hoá lao động',
        address: '55B Nguyễn Thị Minh Khai, Q.3',
        note: 'Hồ bơi'
    },
    {
        id: 'SPT...',
        location: 'Sân vận động Phú Thọ',
        address: '219 Lý Thường Kiệt, P.15, Q.11',
        note: ''
    },
    {
        id: 'STTQ1...',
        location: 'Trung tâm thể dục thể thao Quận 1',
        address: 'Số 1, Huyền Trân Công Chúa, P.Bến Thành, Q.1',
        note: ''
    }
]

let locationl_list = document.querySelector('#location-study')
renderLocal = (local) => {
    local.forEach(function (e) {
        let prod =
            `
                <td>${e.id}</td>
                <td>${e.location}</td>
                <td>${e.address}</td>
                <td>${e.note}</td>
            `
        locationl_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderLocal(locatStudy);

/* ============ news ======================*/
let news = [{
        title: 'Nhân viên Giao hàng - Công ty TNHH Manpower Việt Nam',
        date: '31/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/nhan-vien-giao-hang-cong-ty-tnhh-manpower-viet-nam.35a8a7b9.html'
    },
    {
        title: 'Nhân Viên Kho - Công ty TNHH Manpower Việt Nam',
        date: '31/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/nhan-vien-kho-cong-ty-tnhh-manpower-viet-nam.35a8a7c0.html'
    },
    {
        title: 'Nhân Viên Sản Xuất Đóng Gói - Công ty TNHH Manpower Việt Nam',
        date: '20/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/nhan-vien-san-xuat-dong-goi-cong-ty-tnhh-manpower-viet-nam.35a8a7cb.html'
    },
    {
        title: 'Thực tập sinh Tài năng_Tester/QC - CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ ĐÀO TẠO YOOT',
        date: '15/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/thuc-tap-sinh-tai-nang-tester-qc-cong-ty-co-phan-cong-nghe-va-dao-tao-yoot.35a8a6f7.html'
    },
    {
        title: 'THỰC TẬP SINH HỖ TRỢ KINH DOANH - CÔNG TY BẢO HIỂM BƯU ĐIỆN SÀI GÒN',
        date: '20/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/thuc-tap-sinh-ho-tro-kinh-doanh-cong-ty-bao-hiem-buu-dien-sai-gon.35a8a6f5.html'
    },
    {
        title: 'Nhân viên Xuất Nhập Khẩu - CÔNG TY TNHH CUNG ỨNG CAD',
        date: '20/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/nhan-vien-xuat-nhap-khau-cong-ty-tnhh-cung-ung-cad.35a8a4cc.html'
    },
    {
        title: 'KẾ TOÁN VIÊN - CÔNG TY TNHH DV TV LIÊN KHÁNH',
        date: '31/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/ke-toan-vien-cong-ty-tnhh-dv-tv-lien-khanh.35a8a495.html'
    },
    {
        title: 'Nhân viên bán thời gian - CÔNG TY TNHH DV TV LIÊN KHÁNH',
        date: '31/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/nhan-vien-ban-thoi-gian-cong-ty-tnhh-dv-tv-lien-khanh.35a8a49c.html'
    },
    {
        title: 'Sale excutive – Nhân viên kinh doanh phần mềm - Công ty cổ phần công nghệ Cloudify',
        date: '15/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/sale-excutive-nhan-vien-kinh-doanh-phan-mem-cong-ty-co-phan-cong-nghe-cloudify.35a8a143.html'
    },
    {
        title: 'Thực tập sinh Marketing - Công ty cổ phần công nghệ Cloudify',
        date: '15/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/thuc-tap-sinh-marketing-cong-ty-co-phan-cong-nghe-cloudify.35a8a142.html'
    },
    {
        title: 'NHÂN VIÊN PART-TIME KHO SHOPEE (bán thời gian) - Công ty TNHH Manpower Việt Nam',
        date: '15/01/2022',
        link: 'http://vieclam.ou.edu.vn/viec-lam/nhan-vien-part-time-kho-shopee-ban-thoi-gian-cong-ty-tnhh-manpower-viet-nam.35a8a0ce.html'
    }
]

let news_list = document.querySelector('#marquee')
renderNews = (news) => {
    news.forEach(function (e, i) {
        switch (i) {
            case 0:
            case 3: {
                e.time_delay = "0.2s"
                break
            }
            case 1:
            case 4: {
                e.time_delay = "0.5s"
                break
            }
            case 2:
            case 5: {
                e.time_delay = "0.8s"
                break
            }
        }
        let prod =
            `
        <p>
        <i class="lni lni-slice"></i>
            <a href="${e.link}"
                class="marquee-link" target="_blank">${e.title}<span class="news-date">Hạn:${e.date}</span>
            </a>
        </p>  
    `
        news_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderNews(news);

/* =============== post group =============== */
let post = [{
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-13.jpg',
        image_hot: 'assets/images/postGr/new.gif',
        link: 'https://oucommunity.hashnode.dev/thong-bao-dang-ky-tai-khoan-tren-he-thong-quan-ly-thi-cua-bo-gdanddt-dot-bo-sung-danh-cho-thi-sinh-tu-do-da-bo-lo-dot-dang-ky-truoc-ngay-1305',
        time: '17/06/2022',
        title: '[THÔNG BÁO] Mở đăng ký vào hệ thống quản lý thi của Bộ GD&ĐT dành cho thí sinh tự do'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-6.jpg',
        image_hot: 'assets/images/postGr/new.gif',
        link: 'https://oucommunity.hashnode.dev/cong-cu-tinh-diem-xet-tuyen-xet-hoc-ba-and-xet-thi-thpt',
        time: '10/05/2022',
        title: '📲 Công cụ tính điểm xét tuyển (Xét học bạ & xét thi THPT)'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-8.png',
        image_hot: 'assets/images/postGr/new.gif',
        link: 'https://oucommunity.hashnode.dev/can-chuan-bi-gi-truoc-khi-dang-ky-xet-hoc-ba-online',
        time: '04/04/2022',
        title: 'Cần chuẩn bị gì trước khi đăng ký xét học bạ online ?'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-9.jpg',
        link: 'https://oucommunity.hashnode.dev/diem-chuan-cac-nam',
        time: '01/04/2022',
        title: 'Điểm chuẩn từng năm'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-11.jpg',
        link: 'https://oucommunity.hashnode.dev/gioi-thieu-nganh-chuyen-nganh-dao-tao-co-hoi-viec-lam-o-truong-dh-mo-tphcm',
        time: '15/03/2022',
        title: 'Giới thiệu Ngành - Chuyên ngành đào tạo - Cơ hội việc làm ở Trường ĐH Mở Tp.HCM'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-12.jpg',
        link: 'https://oucommunity.hashnode.dev/cac-giay-to-can-co-trong-ho-so',
        time: '02/03/2022',
        title: 'Các giấy tờ cần có trong hồ sơ'
    }
]

let post_list = document.querySelector('#group-post')
renderPost = (post) => {
    post.forEach(function (e) {
        let prod =
            `
            <div class="df col-lg-4 col-md-6 col-sm-6 col-11">
                <div class="single-blog mt-35">
                    <div class="blog-image">
                        <img src="${e.image}" alt="post" loading="lazy">       
            `

        if (!e.image_hot == '')
            prod += `<img src="${e.image_hot}" alt="new">`

        prod +=
            ` </div>
                <div class="blog-content">
                    <ul class="meta">
                        <li><b>Đăng bởi:</b> <a href="#">${e.author}</a></li>
                        <li style="font-size:14px"><b><i class="fas fa-clock"></i> ${e.time}</b></li>
                    </ul>
                    <p class="text">${e.title}</p>
                    <a class="more" href="${e.link}"
                        target="_blank">Xem
                        chi tiết<i class="lni-chevron-right"></i></a>
                </div>
            </div> <!-- single blog -->
        </div>
        `
        post_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderPost(post);

/* =============== post group utility =============== */
// let postUtil = [{
//         author: 'Thành Nam',
//         image: 'assets/images/postGr/post-16.jpg',
//         link: 'https://www.facebook.com/groups/oumembers/posts/1347522502331021/',
//         time: '18/10/2021',
//         title: 'Hướng dẫn sửa lỗi font slide của giảng viên'
//     },
//     {
//         author: 'Thảo Vy Ngo ',
//         image: 'assets/images/postGr/post-15.jpg',
//         link: 'https://www.facebook.com/groups/oumembers/posts/1337789979970940/',
//         time: '04/10/2021',
//         title: 'NOTION PERSONAL PRO - XÀI FREE NHỜ CÓ MAIL TRƯỜNG'
//     },
//     {
//         author: 'Thành Nam',
//         image: 'assets/images/postGr/post-14.jpg',
//         link: 'https://www.facebook.com/groups/oumembers/posts/1320830008333604/',
//         time: '09/09/2021',
//         title: 'Chatbot ôn luyện tin học và anh văn đầu vào'
//     },
//     {
//         author: 'Thảo Vy Ngo',
//         image: 'assets/images/postGr/post-13.jpg',
//         link: 'https://www.facebook.com/groups/oumembers/posts/1343930692690202/',
//         time: '13/10/2021',
//         title: 'CANVA FOR EDUCATION - XÀI FREE NHỜ CÓ MAIL TRƯỜNG'
//     },
//     {
//         author: 'Thành Nam',
//         image: 'assets/images/postGr/post-10.jpg',
//         link: 'https://www.facebook.com/groups/oumembers/posts/1311843205898951/',
//         time: '27/08/2021',
//         title: 'Share template kho tài liệu tiếng anh tự học'
//     },
//     {
//         author: 'Thành Nam',
//         image: 'assets/images/postGr/post-12.jpg',
//         link: 'https://www.facebook.com/groups/oumembers/posts/1284282711988334/',
//         time: '18/07/2021',
//         title: 'Hướng dẫn chụp ảnh 3x4 upload web.'
//     }
// ]
// 
// let post_util_list = document.querySelector('#group-post-util')
// renderPostUtil = (post) => {
//     post.forEach(function (e) {
//         let prod =
//             `
//         <div class="df col-lg-4 col-md-6 col-sm-6">
//             <div class="trick-box">
//                 <div class="trick-img">
//                     <img src="${e.image}" alt="mẹo và tiện ích" loading="lazy" />
//                 </div>
//                 <div class="trick-data">
//                     <div class="trick-head">
//                         <span class="trick-author">${e.author}</span>
//                         <span>${e.time}</span>
//                     </div>           
//                         <p class="text">${e.title}</p>
//                         <a href="${e.link}" class="trick-more" target="_blank">Xem chi tiết <i class="lni lni-arrow-right"></i></a>
//                 </div>
//             </div>
//         </div>  
//         `
//         post_util_list.insertAdjacentHTML("beforeend", prod)
//     })
// }
// renderPostUtil(postUtil);

/* =============== post group review =============== */
let postReview = [{
        author: 'Diệu Nhân',
        image: 'assets/images/postGr/post-3.jpg',
        link: 'https://oucommunity.hashnode.dev/mot-so-kinh-nghiem-dat-hoc-bong-khuyen-khich-hoc-tap',
        time: '01/10/2021',
        title: 'MỘT SỐ KINH NGHIỆM ĐẠT HỌC BỔNG KHUYẾN KHÍCH HỌC TẬP'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-4.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1301559593593979/',
        time: '12/08/2021',
        title: 'Giới thiệu về Hệ thống điểm tích lũy 4 năm đại học.'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-1.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1299457123804226/',
        time: '09/08/2021',
        title: 'Giới thiệu Hệ thống điểm rèn luyện của trường Đại học Mở'
    },
    {
        author: 'Hieu Q.Nguyen',
        image: 'assets/images/postGr/post-12.jpg',
        link: 'https://oucommunity.hashnode.dev/nganh-ngon-ngu-anh-tai-dai-hoc-mo-tphcm',
        time: '17/06/2021',
        title: 'NGÀNH NGÔN NGỮ ANH TẠI ĐẠI HỌC MỞ TP. HCM'
    },
    {
        author: 'Quang Hà',
        image: 'assets/images/postGr/post-6.jpg',
        link: 'https://oucommunity.hashnode.dev/goc-nhin-ve-dai-hoc-mo-tu-1-sinh-vien-nam-nhat',
        time: '28/07/2021',
        title: 'Góc nhìn về đại học Mở từ 1 sv năm nhất..'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-7.jpg',
        link: 'https://oucommunity.hashnode.dev/co-so-371-nguyen-kiem',
        time: '23/06/2021',
        title: 'Review cơ sở 371 Nguyễn Kiệm'
    },
    {
        author: 'Diệu Nhân',
        image: 'assets/images/postGr/post-17.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1268858743530731/',
        time: '24/06/2021',
        title: 'Ngôn ngữ Anh năm nhất cần chuẩn bị gì?'
    },
    {
        author: 'Trần ĐạtK',
        image: 'assets/images/postGr/post-16.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1080016299081644/',
        time: '27/09/2020',
        title: 'Review kiểm tra anh văn đầu vào.'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-14.jpg',
        link: 'https://oucommunity.hashnode.dev/series/quan-su',
        time: '27/02/2021',
        title: 'Review quân sự.'
    }
]

let post_review_list = document.querySelector('#group-post-review')
renderPostReview = (post) => {
    post.forEach(e => {
        let prod =
            `
    <div class="df review-post">
        <div class="single-blog mt-30">
            <div class="blog-image">
                <img src="${e.image}" alt="blog" loading="lazy">       
            </div>
        <div class="blog-content">
            <ul class="meta">
                <li><b>Đăng bởi:</b> <a href="#">${e.author}</a></li>
                <li>${e.time}</li>
            </ul>
            <p class="text">${e.title}</p>
            <a class="more" href="${e.link}"
                target="_blank">Xem
                chi tiết<i class="lni-chevron-right"></i></a>
        </div>
    </div> <!-- single blog -->
</div>
`
        post_review_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderPostReview(postReview);
$(window).on('load', function () {
    if (window.innerWidth <= 575)
        $('#group-post-review .review-post').addClass("col-11")
    else
        $('#group-post-review .review-post').removeClass("col-11")
})

$('.post-review').owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    autoHeight: true,
    nav: false,
    dots: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1500,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})

/* =============== system =============== */
let system = [{
        image: 'assets/images/postGr/post-9.jpg',
        link: 'http://dkmh.ou.edu.vn/',
        title: 'Hệ thống đăng ký môn học trực tuyến',
        content: 'là hệ thống dùng để đăng ký môn học trực tuyến, bắt đầu từ học kỳ 2 năm 1',
    },
    {
        image: 'assets/images/postGr/post-10.jpg',
        link: 'http://sis.ou.edu.vn/',
        title: 'Hệ thống dịch vụ sinh viên',
        content: 'là hệ thống dùng để đăng ký cấp giấy chứng nhận, cấp bản sao bằng tốt nghiệp, giấy chứng nhận tạm thời , cấp thẻ sinh viên...',
    },
    {
        image: 'assets/images/postGr/post-11.jpg',
        link: 'https://tienichsv.ou.edu.vn/',
        title: 'Hệ thống tiện ích sinh viên',
        content: 'là hệ thống dùng để xem thời khoá biểu, xem điểm thi, lịch thi, xem chương trình đào tạo...',
    },
    {
        image: 'assets/images/postGr/post-12.jpg',
        link: 'javascript:;',
        title: 'Hệ thống mail',
        content: 'là hệ thống dùng để nhận thông báo từ phòng quản lý đào tạo, phòng y tế, thư quán... ngoài ra có thể sử dụng tài khoản này truy cập google drive unlimited',
    },
    {
        image: 'assets/images/postGr/post-13.jpg',
        link: 'http://lms.ou.edu.vn/',
        title: 'Hệ thống hỗ trợ học tập online',
        content: 'là hệ thống dùng để liên lạc giữa giảng viên và sinh viên, nơi upload bài tập chạy deadline...',
    },
    {
        image: 'assets/images/postGr/post-14.jpg',
        link: 'http://thuquan.ou.edu.vn/',
        title: 'Hệ thống hỗ trợ đặt sách online',
        content: 'là hệ thống dùng để đặt mua sách từ thư viện',
    },
    {
        image: 'assets/images/postGr/post-15.jpg',
        link: 'http://vieclam.ou.edu.vn/',
        title: 'Cổng thông tin việc làm',
        content: 'là hệ thống dùng để tìm việc, liên kết doanh nghiệp với sinh viên',
    },
    {
        image: 'assets/images/postGr/post-16.jpg',
        link: 'http://xdg.ou.edu.vn/',
        title: 'Hệ thống tra cứu điểm thi',
        content: 'là hệ thống dùng để tra cứu điểm thi sau mỗi học kỳ',
    },
    {
        image: 'assets/images/postGr/post-17.jpg',
        link: 'http://nhatro.ou.edu.vn/',
        title: 'Nhà trọ OU',
        content: 'là hệ thống dùng để tra cứu nhà trọ, giúp sinh viên tìm dễ dàng và nhanh chóng hơn.',
    }
]

let system_list = document.querySelector('#system-content')

renderSystem = (system) => {
    system.forEach(function (e) {
        let prod = `
        <div class="df col-lg-4 col-md-6 col-sm-6 col-11">
            <div class="single-blog single-blog-border mt-30">
                <div class="blog-image">
                    <img src="${e.image}" alt="blog" loading="lazy">
                </div>
                <div class="blog-content">
                    <ul class="meta">
                        <li><b>Đăng bởi:</b> <a href="#">Thành Nam</a></li>
                    </ul>
                    <p class="text">${e.title}</p>
                    <p><b>Mô tả: </b> ${e.content}</p>
                    <a class="more" href="${e.link}">Đi tới trang web<i
                            class="lni-chevron-right"></i></a>
                </div>
            </div> <!-- single blog -->
        </div>
        `
        system_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderSystem(system)