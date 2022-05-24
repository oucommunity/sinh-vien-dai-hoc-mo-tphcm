/* ============ Global variable =============*/
var KVUT = 0;
var DTUT = 0;
var t_10, v_10, nn_10, vl_10, s_10, h_10, ls_10, d_10, cd_10;
var t_11, v_11, nn_11, vl_11, s_11, h_11, ls_11, d_11, cd_11;
var t_12, v_12, nn_12, vl_12, s_12, h_12, ls_12, d_12, cd_12;
var lop10, lop11, lop12;


$(document).ready(function () {
    // disable type input
    $('#my-grade input').keypress(function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') !=
                -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        if ($(this).val() < 0 || $(this).val() > 10) {
            event.preventDefault();
        }
    });

    // load data from logostorage
    lop10 = JSON.parse(localStorage.getItem("lop10"));
    lop11 = JSON.parse(localStorage.getItem("lop11"));
    lop12 = JSON.parse(localStorage.getItem("lop12"));
    if (localStorage.getItem('kvut')) {
        $('#kvut').val(localStorage.getItem('kvut'))
    };
    if (localStorage.getItem('dtut')) {
        $('#dtut').val(localStorage.getItem('dtut'))
    };

    // dữ liệu điểm lớp 10
    $("#t10").val(lop10[0]);
    $("#v10").val(lop10[1]);
    $("#nn10").val(lop10[2]);
    $("#vl10").val(lop10[3]);
    $("#s10").val(lop10[4]);
    $("#h10").val(lop10[5]);
    $("#ls10").val(lop10[6]);
    $("#d10").val(lop10[7]);
    $("#cd10").val(lop10[8]);

    // dữ liệu điểm lớp 11
    $("#t11").val(lop11[0]);
    $("#v11").val(lop11[1]);
    $("#nn11").val(lop11[2]);
    $("#vl11").val(lop11[3]);
    $("#s11").val(lop11[4]);
    $("#h11").val(lop11[5]);
    $("#ls11").val(lop11[6]);
    $("#d11").val(lop11[7]);
    $("#cd11").val(lop11[8]);

    // dữ liệu điểm lớp 12
    $("#t12").val(lop12[0]);
    $("#v12").val(lop12[1]);
    $("#nn12").val(lop12[2]);
    $("#vl12").val(lop12[3]);
    $("#s12").val(lop12[4]);
    $("#h12").val(lop12[5]);
    $("#ls12").val(lop12[6]);
    $("#d12").val(lop12[7]);
    $("#cd12").val(lop12[8]);

    // toast check data is exist
    for (var i = 0; i < lop10.length; i++) {
        if (lop10[i] != '' || lop11[i] != '' || lop12[i] != '') {
            const toast = document.querySelector(".toast")
            closeIcon = document.querySelector(".close"),
                progress = document.querySelector(".progress");

            let timer1, timer2;

            toast.classList.add("active");
            progress.classList.add("active");

            timer1 = setTimeout(() => {
                toast.classList.remove("active");
            }, 5000); //1s = 1000 milliseconds

            timer2 = setTimeout(() => {
                progress.classList.remove("active");
            }, 5300);

            closeIcon.addEventListener("click", () => {
                toast.classList.remove("active");

                setTimeout(() => {
                    progress.classList.remove("active");
                }, 300);

                clearTimeout(timer1);
                clearTimeout(timer2);
            });
            return;
        }
    }

    $("#check").click(function () {
        Tinh_Diem()
    });
});

/* ============ fn =============== */
function Tinh_Diem_Mon(l10, l11, hk1l12) {
    var tong = (parseFloat(l10) + parseFloat(l11) + parseFloat(hk1l12)) / 3;
    return tong;
};

function Tinh_Diem_TH(m1, m2, m3) {
    var tong = parseFloat(m1) + parseFloat(m2) + parseFloat(m3);
    return tong;
}

function Tinh_Diem_TH_HS2(m1x2, m2, m3) {
    var tong = (parseFloat(m1x2) * 2 + parseFloat(m2) + parseFloat(m3)) * 3 / 4;
    return tong;
}

function Tinh_TBC(m1, m2, m3) {
    var TBC = (parseFloat(m1) + parseFloat(m2) + parseFloat(m3)) / 3;
    return TBC;
}

function Tinh_Diem() {
    var kq = $("#ket-qua").val();
    var kqt = $("#ket-qua-tinh").val();
    var kv = $("#kvut").val();
    var dt = $("#dtut").val();

    // Điểm cả năm lớp 10 
    t_10 = $("#t10").val();
    v_10 = $("#v10").val();
    nn_10 = $("#nn10").val();
    vl_10 = $("#vl10").val();
    s_10 = $("#s10").val();
    h_10 = $("#h10").val();
    ls_10 = $("#ls10").val();
    d_10 = $("#d10").val();
    cd_10 = $("#cd10").val();

    // Điểm cả năm lớp 11 
    t_11 = $("#t11").val();
    v_11 = $("#v11").val();
    nn_11 = $("#nn11").val();
    vl_11 = $("#vl11").val();
    s_11 = $("#s11").val();
    h_11 = $("#h11").val();
    ls_11 = $("#ls11").val();
    d_11 = $("#d11").val();
    cd_11 = $("#cd11").val();

    // Điểm hk1 lớp 12 
    t_12 = $("#t12").val();
    v_12 = $("#v12").val();
    nn_12 = $("#nn12").val();
    vl_12 = $("#vl12").val();
    s_12 = $("#s12").val();
    h_12 = $("#h12").val();
    ls_12 = $("#ls12").val();
    d_12 = $("#d12").val();
    cd_12 = $("#cd12").val();


    // alert tính điểm btn
    if (t_10 == '' && v_10 == '' && nn_10 == '' && vl_10 == '' && s_10 == '' && h_10 == '' &&
        ls_10 == '' && d_10 == '' && cd_10 == '' && t_11 == '' && v_11 == '' && nn_11 == '' &&
        vl_11 == '' && s_11 == '' && h_11 == '' && ls_11 == '' && d_11 == '' && cd_11 == '' &&
        t_12 == '' && v_12 == '' && nn_12 == '' && vl_12 == '' && s_12 == '' && h_12 == '' &&
        ls_12 == '' && d_12 == '' && cd_12 == '') {
        Swal.fire({
            icon: 'error',
            title: 'Tính điểm thất bại !',
            text: 'Không nhập điểm lấy gì mà tính 🤬🤬🤬',
            footer: '<a href="https://www.facebook.com/groups/ou.community" target="_blank" class="text-center">Vào group <span class="text-danger">"Cộng đồng Sinh viên Đại học Mở Tp.HCM - HCMCOU"</span> để biết nhiều thông tin hơn. Nhấn vào đây!</a>'
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Tính điểm thành công !',
            text: 'Lưu ý: có thay đổi điểm thì ấn tính điểm lại nhé 🥰🥰🥰',
            footer: '<a href="https://www.facebook.com/groups/ou.community" target="_blank" class="text-center">Vào group <span class="text-danger">"Cộng đồng Sinh viên Đại học Mở Tp.HCM - HCMCOU"</span> để biết nhiều thông tin hơn. Nhấn vào đây!</a>'
        })

        // lưu vào local storage
        lop10 = [t_10, v_10, nn_10, vl_10, s_10, h_10, ls_10, d_10, cd_10];
        lop11 = [t_11, v_11, nn_11, vl_11, s_11, h_11, ls_11, d_11, cd_11];
        lop12 = [t_12, v_12, nn_12, vl_12, s_12, h_12, ls_12, d_12, cd_12];
        localStorage.setItem("lop10", JSON.stringify(lop10));
        localStorage.setItem("lop11", JSON.stringify(lop11));
        localStorage.setItem("lop12", JSON.stringify(lop12));
        localStorage.setItem("kvut", kv);
        localStorage.setItem("dtut", dt);

        // Điểm trung bình môn
        var t = Tinh_Diem_Mon(t_10, t_11, t_12);
        var v = Tinh_Diem_Mon(v_10, v_11, v_12);
        var nn = Tinh_Diem_Mon(nn_10, nn_11, nn_12);
        var vl = Tinh_Diem_Mon(vl_10, vl_11, vl_12);
        var s = Tinh_Diem_Mon(s_10, s_11, s_12);
        var h = Tinh_Diem_Mon(h_10, h_11, h_12);
        var ls = Tinh_Diem_Mon(ls_10, ls_11, ls_12);
        var d = Tinh_Diem_Mon(d_10, d_11, d_12);
        var cd = Tinh_Diem_Mon(cd_10, cd_11, cd_12);

        // Điểm khu vực ưu tiên
        if (kv == "0" || kv == "3") {
            KVUT = 0;
        } else if (kv == "1") {
            KVUT = 0.75;
        } else if (kv == "2") {
            KVUT = 0.25;
        } else KVUT = 0.5;

        // Điểm đối tượng ưu tiên
        if (dt == "1" || dt == "2" || dt == "3" || dt == "4") {
            DTUT = 2;
        } else if (dt == "5" || dt == "6" || dt == "7") {
            DTUT = 1;
        } else DTUT = 0;

        /*
        Toán, Lý, Hóa (A00)
        Toán, Lý, Anh (A01)
        Toán, Lý, Sinh (A02)
        Toán, Hóa, Sinh (B00)
        Văn, Sử, Địa (C00)
        Toán, Sử, Văn (C03)
        Toán, Văn, Anh (D01)
        Toán, Hóa, Anh (D07)
        Toán, Sinh, Anh (D08)
        Văn, Sử, Anh (D14)
        Văn, KHXH, Anh (D78)
        Toán, KHXH, Anh (D96)
        Văn, Toán, Ngoại Ngữ (D01 - D06, DD2)
        Văn, KHXH, Ngoại Ngữ (D78 - D83, DH8)
        Toán, Văn, Ngoại Ngữ (D01, D03, D05, D06)
        */
        // Điểm tổ hợp môn
        var a00 = Tinh_Diem_TH(t, vl, h) + KVUT + DTUT;
        var a00hs2t = Tinh_Diem_TH_HS2(t, vl, h) + KVUT + DTUT;
        var a01 = Tinh_Diem_TH(t, vl, nn) + KVUT + DTUT;
        var a01hs2nn = Tinh_Diem_TH_HS2(nn, vl, t) + KVUT + DTUT;
        var a01hs2t = Tinh_Diem_TH_HS2(t, vl, nn) + KVUT + DTUT;
        var a02 = Tinh_Diem_TH(t, vl, s) + KVUT + DTUT;
        var b00 = Tinh_Diem_TH(t, h, s) + KVUT + DTUT;
        var c00 = Tinh_Diem_TH(v, ls, d) + KVUT + DTUT;
        var c01 = Tinh_Diem_TH(t, v, vl) + KVUT + DTUT;
        var c02 = Tinh_Diem_TH(t, v, h) + KVUT + DTUT;
        var c03 = Tinh_Diem_TH(t, ls, v) + KVUT + DTUT;
        var d01 = Tinh_Diem_TH(t, v, nn) + KVUT + DTUT;
        var d01hs2nn = Tinh_Diem_TH_HS2(nn, v, t) + KVUT + DTUT;
        var d01hs2t = Tinh_Diem_TH_HS2(t, v, nn) + KVUT + DTUT;
        var d07 = Tinh_Diem_TH(t, h, nn) + KVUT + DTUT;
        var d07hs2t = Tinh_Diem_TH_HS2(t, h, nn) + KVUT + DTUT;
        var d07hs2nn = Tinh_Diem_TH_HS2(nn, h, t) + KVUT + DTUT;
        var d08 = Tinh_Diem_TH(t, s, nn) + KVUT + DTUT;
        var d14 = Tinh_Diem_TH(v, nn, ls) + KVUT + DTUT;
        var d14hs2nn = Tinh_Diem_TH_HS2(nn, v, ls) + KVUT + DTUT;
        var d15 = Tinh_Diem_TH(v, nn, d) + KVUT + DTUT;
        var d78 = Tinh_Diem_TH(v, nn, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;
        var d78hs2nn = Tinh_Diem_TH_HS2(nn, v, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;
        var d90 = Tinh_Diem_TH(t, nn, Tinh_TBC(vl, h, s)) + KVUT + DTUT;
        var d96 = Tinh_Diem_TH(t, nn, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;
        var d96hs2nn = Tinh_Diem_TH_HS2(nn, v, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;

        // change NaN to 0
        if (!a00 != 0) a00 = 0
        if (!a00hs2t != 0) a00hs2t = 0
        if (!a01 != 0) a01 = 0
        if (!a01hs2nn != 0) a01hs2nn = 0
        if (!a01hs2t != 0) a01hs2t = 0
        if (!a02 != 0) a02 = 0
        if (!b00 != 0) b00 = 0
        if (!c00 != 0) c00 = 0
        if (!c01 != 0) c01 = 0
        if (!c02 != 0) c02 = 0
        if (!c03 != 0) c03 = 0
        if (!d01 != 0) d01 = 0
        if (!d01hs2nn != 0) d01hs2nn = 0
        if (!d01hs2t != 0) d01hs2t = 0
        if (!d07 != 0) d07 = 0
        if (!d07hs2t != 0) d07hs2t = 0
        if (!d07hs2nn != 0) d07hs2nn = 0
        if (!d08 != 0) d08 = 0
        if (!d14 != 0) d14 = 0
        if (!d14hs2nn != 0) d14hs2nn = 0
        if (!d15 != 0) d15 = 0
        if (!d78 != 0) d78 = 0
        if (!d78hs2nn != 0) d78hs2nn = 0
        if (!d90 != 0) d90 = 0
        if (!d96 != 0) d96 = 0
        if (!d96hs2nn != 0) d96hs2nn = 0


        // Chọn trường
        var kq_mon = $("#kq-mon");
        var kq_to_hop = $("#kq-to-hop");
        var kq_dxtou = $("#kq-dxtou");
        if (kq == 'ou' && kqt == '0') {
            kq_mon.removeClass("hidden");
            kq_to_hop.addClass("hidden");
            kq_dxtou.addClass("hidden");
        } else if (kq == 'ou' && kqt == '1') {
            kq_to_hop.addClass("hidden");
            kq_dxtou.removeClass("hidden");
            kq_mon.addClass("hidden");
        } else if (kq == 'ou' && kqt == '2') {
            kq_to_hop.addClass("hidden");
            kq_dxtou.removeClass("hidden");
            kq_mon.removeClass("hidden");
        } else if (kq == 'another' && kqt == '0') {
            kq_to_hop.addClass("hidden");
            kq_dxtou.addClass("hidden");
            kq_mon.removeClass("hidden");
        } else if (kq == 'another' && kqt == '1') {
            kq_to_hop.removeClass("hidden");
            kq_dxtou.addClass("hidden");
            kq_mon.addClass("hidden");
        } else if (kq == 'another' && kqt == '2') {
            kq_to_hop.removeClass("hidden");
            kq_dxtou.addClass("hidden");
            kq_mon.removeClass("hidden");
        }

        // hiển thị điểm trung bình môn
        $("#kq-t").val(t.toFixed(2));
        $("#kq-v").val(v.toFixed(2));
        $("#kq-nn").val(nn.toFixed(2));
        $("#kq-vl").val(vl.toFixed(2));
        $("#kq-s").val(s.toFixed(2));
        $("#kq-h").val(h.toFixed(2));
        $("#kq-ls").val(ls.toFixed(2));
        $("#kq-d").val(d.toFixed(2));
        $("#kq-cd").val(cd.toFixed(2));
        var kq_mon_value = $("#kq-mon input");
        for (i = 0; i < kq_mon_value.length; i++)
            if (kq_mon_value[i].value == 'NaN')
                kq_mon_value[i].value = '0';

        // hiện thị điểm tổ hợp môn
        $("#a00").val(a00.toFixed(2));
        $("#a01").val(a01.toFixed(2));
        $("#a02").val(a02.toFixed(2));
        $("#b00").val(b00.toFixed(2));
        $("#c00").val(c00.toFixed(2));
        $("#c01").val(c01.toFixed(2));
        $("#c02").val(c02.toFixed(2));
        $("#c03").val(c03.toFixed(2));
        $("#d01").val(d01.toFixed(2));
        $("#d07").val(d07.toFixed(2));
        $("#d08").val(d08.toFixed(2));
        $("#d14").val(d14.toFixed(2));
        $("#d15").val(d15.toFixed(2));
        $("#d78").val(d78.toFixed(2));
        $("#d90").val(d90.toFixed(2));
        $("#d96").val(d96.toFixed(2));

        // data table
        dxt = [
            // Đại trà - Ngôn ngữ anh
            [
                'Đại trà',
                '7220201',
                'Ngôn ngữ Anh',
                `${a01hs2nn.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'Đại trà',
                '7220201',
                'Ngôn ngữ Anh',
                `${d01hs2nn.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'Đại trà',
                '7220201',
                'Ngôn ngữ Anh',
                `${d14hs2nn.toFixed(2)}`,
                'Văn, Sử, Anh (D14)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'Đại trà',
                '7220201',
                'Ngôn ngữ Anh',
                `${d78hs2nn.toFixed(2)}`,
                'Văn, KHXH, Anh (D78)',
                'Môn Ngoại ngữ hệ số 2'
            ],

            // Đại trà - Ngôn ngữ trung quốc
            [
                'Đại trà',
                '7220204',
                'Ngôn ngữ Trung Quốc',
                `${d01hs2nn.toFixed(2)}`,
                `Văn, Toán, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'Đại trà',
                '7220204',
                'Ngôn ngữ Trung Quốc',
                `${d78hs2nn.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Môn Ngoại ngữ hệ số 2'
            ],

            // Đại trà - Ngôn ngữ Nhật
            [
                'Đại trà',
                '7220209',
                'Ngôn ngữ Nhật',
                `${d01hs2nn.toFixed(2)}`,
                `Văn, Toán, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'Đại trà',
                '7220209',
                'Ngôn ngữ Nhật',
                `${d78hs2nn.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Môn Ngoại ngữ hệ số 2'
            ],

            // Đại trà - Ngôn ngữ Hàn Quốc
            [
                'Đại trà',
                '7220210',
                'Ngôn ngữ Hàn Quốc',
                `${d01hs2nn.toFixed(2)}`,
                `Văn, Toán, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'Đại trà',
                '7220210',
                'Ngôn ngữ Hàn Quốc',
                `${d78hs2nn.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Môn Ngoại ngữ hệ số 2'
            ],

            // Đại trà - Kinh Tế
            [
                'Đại trà',
                '7310101',
                'Kinh Tế',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310101',
                'Kinh Tế',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310101',
                'Kinh Tế',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310101',
                'Kinh Tế',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Xã Hội Học
            [
                'Đại trà',
                '7310301',
                'Xã Hội Học',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310301',
                'Xã Hội Học',
                `${c00.toFixed(2)}`,
                'Văn, Sử, Địa (C00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310301',
                'Xã Hội Học',
                `${d01.toFixed(2)}`,
                `Toán, Văn, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310301',
                'Xã Hội Học',
                `${d78.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Không có môn hệ số 2'
            ],

            // Đại trà - Đông Nam Á học
            [
                'Đại trà',
                '7310620',
                'Đông Nam Á học',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310620',
                'Đông Nam Á học',
                `${c00.toFixed(2)}`,
                'Văn, Sử, Địa (C00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310620',
                'Đông Nam Á học',
                `${d01.toFixed(2)}`,
                `Toán, Văn, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7310620',
                'Đông Nam Á học',
                `${d78.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Không có môn hệ số 2'
            ],

            // Đại trà - Quản Trị Kinh Doanh
            [
                'Đại trà',
                '7340101',
                'Quản Trị Kinh Doanh',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340101',
                'Quản Trị Kinh Doanh',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340101',
                'Quản Trị Kinh Doanh',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340101',
                'Quản Trị Kinh Doanh',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Marketing
            [
                'Đại trà',
                '7340115',
                'Marketing',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340115',
                'Marketing',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340115',
                'Marketing',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340115',
                'Marketing',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Kinh Doanh Quốc Tế
            [
                'Đại trà',
                '7340120',
                'Kinh Doanh Quốc Tế',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340120',
                'Kinh Doanh Quốc Tế',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340120',
                'Kinh Doanh Quốc Tế',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340120',
                'Kinh Doanh Quốc Tế',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Tài chính Ngân hàng
            [
                'Đại trà',
                '7340201',
                'Tài chính Ngân hàng',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340201',
                'Tài chính Ngân hàng',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340201',
                'Tài chính Ngân hàng',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340201',
                'Tài chính Ngân hàng',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Kế toán
            [
                'Đại trà',
                '7340301',
                'Kế toán',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340301',
                'Kế toán',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340301',
                'Kế toán',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340301',
                'Kế toán',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Kiểm toán
            [
                'Đại trà',
                '7340302',
                'Kiểm toán',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340302',
                'Kiểm toán',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340302',
                'Kiểm toán',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340302',
                'Kiểm toán',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Quản lý công (Ngành mới)
            [
                'Đại trà',
                '7340403',
                'Quản lý công (Ngành mới)',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340403',
                'Quản lý công (Ngành mới)',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340403',
                'Quản lý công (Ngành mới)',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340403',
                'Quản lý công (Ngành mới)',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Quản Trị Nhân Lực
            [
                'Đại trà',
                '7340404',
                'Quản Trị Nhân Lực',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340404',
                'Quản Trị Nhân Lực',
                `${c03.toFixed(2)}`,
                'Toán, Sử, Văn (C03)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340404',
                'Quản Trị Nhân Lực',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340404',
                'Quản Trị Nhân Lực',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Hệ Thống Thông Tin Quản Lý
            [
                'Đại trà',
                '7340405',
                'Hệ Thống Thông Tin Quản Lý',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340405',
                'Hệ Thống Thông Tin Quản Lý',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340405',
                'Hệ Thống Thông Tin Quản Lý',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7340405',
                'Hệ Thống Thông Tin Quản Lý',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Luật
            [
                'Đại trà',
                '7380101',
                'Luật',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7380101',
                'Luật',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7380101',
                'Luật',
                `${c00.toFixed(2)}`,
                'Văn, Sử, Địa (C00)',
                'Điểm trúng tuyển phải cao hơn điểm chuẩn 1.5'
            ],
            [
                'Đại trà',
                '7380101',
                'Luật',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Ngoại Ngữ (D01, D03, D05, D06)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Luật Kinh Tế
            [
                'Đại trà',
                '7380107',
                'Luật Kinh Tế',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7380107',
                'Luật Kinh Tế',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7380107',
                'Luật Kinh Tế',
                `${c00.toFixed(2)}`,
                'Văn, Sử, Địa (C00)',
                'Điểm trúng tuyển phải cao hơn điểm chuẩn 1.5'
            ],
            [
                'Đại trà',
                '7380107',
                'Luật Kinh Tế',
                `${d01.toFixed(2)}`,
                `Toán, Văn, Ngoại Ngữ <br> (D01, D03, D05, D06)`,
                'Không có môn hệ số 2'
            ],

            // Đại trà - Công Nghệ Sinh Học
            [
                'Đại trà',
                '7420201',
                'Công Nghệ Sinh Học',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7420201',
                'Công Nghệ Sinh Học',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7420201',
                'Công Nghệ Sinh Học',
                `${a02.toFixed(2)}`,
                'Toán, Lý, Sinh (A02)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7420201',
                'Công Nghệ Sinh Học',
                `${b00.toFixed(2)}`,
                'Toán, Hóa, Sinh (B00)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Khoa Học Máy Tính
            [
                'Đại trà',
                '7480101',
                'Khoa Học Máy Tính',
                `${a00hs2t.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7480101',
                'Khoa Học Máy Tính',
                `${a01hs2t.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7480101',
                'Khoa Học Máy Tính',
                `${d01hs2t.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7480101',
                'Khoa Học Máy Tính',
                `${d07hs2t.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Toán hệ số 2'
            ],

            // Đại trà - Công Nghệ Thông Tin
            [
                'Đại trà',
                '7480201',
                'Công Nghệ Thông Tin',
                `${a00hs2t.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7480201',
                'Công Nghệ Thông Tin',
                `${a01hs2t.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7480201',
                'Công Nghệ Thông Tin',
                `${d01hs2t.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7480201',
                'Công Nghệ Thông Tin',
                `${d07hs2t.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Toán hệ số 2'
            ],

            // Đại trà - CNKT Công Trình Xây Dựng
            [
                'Đại trà',
                '7510102',
                'CNKT Công Trình Xây Dựng',
                `${a00hs2t.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7510102',
                'CNKT Công Trình Xây Dựng',
                `${a01hs2t.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7510102',
                'CNKT Công Trình Xây Dựng',
                `${d01hs2t.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7510102',
                'CNKT Công Trình Xây Dựng',
                `${d07hs2t.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Toán hệ số 2'
            ],

            // Đại trà - Logistics và Quản lý chuỗi cung ứng
            [
                'Đại trà',
                '7510605',
                'Logistics và Quản lý chuỗi cung ứng',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7510605',
                'Logistics và Quản lý chuỗi cung ứng',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7510605',
                'Logistics và Quản lý chuỗi cung ứng',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7510605',
                'Logistics và Quản lý chuỗi cung ứng',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Công Nghệ Thực Phẩm
            [
                'Đại trà',
                '7540101',
                'Công Nghệ Thực Phẩm',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7540101',
                'Công Nghệ Thực Phẩm',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7540101',
                'Công Nghệ Thực Phẩm',
                `${b00.toFixed(2)}`,
                'Toán, Hóa, Sinh (B00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7540101',
                'Công Nghệ Thực Phẩm',
                `${d07.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // Đại trà - Quản Lý Xây Dựng
            [
                'Đại trà',
                '7580302',
                'Quản Lý Xây Dựng',
                `${a00hs2t.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7580302',
                'Quản Lý Xây Dựng',
                `${a01hs2t.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7580302',
                'Quản Lý Xây Dựng',
                `${d01hs2t.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Toán hệ số 2'
            ],
            [
                'Đại trà',
                '7580302',
                'Quản Lý Xây Dựng',
                `${d07hs2t.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Toán hệ số 2'
            ],

            // Đại trà - Công Tác Xã Hội
            [
                'Đại trà',
                '7760101',
                'Công Tác Xã Hội',
                `${c00.toFixed(2)}`,
                'Văn, Sử, Địa (C00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7760101',
                'Công Tác Xã Hội',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7760101',
                'Công Tác Xã Hội',
                `${d01.toFixed(2)}`,
                `Toán, Văn, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7760101',
                'Công Tác Xã Hội',
                `${d78.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Không có môn hệ số 2'
            ],

            // Đại trà - Du Lịch
            [
                'Đại trà',
                '7810101',
                'Du Lịch',
                `${a00.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7810101',
                'Du Lịch',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7810101',
                'Du Lịch',
                `${c03.toFixed(2)}`,
                'Toán, Sử, Văn (C03)',
                'Không có môn hệ số 2'
            ],
            [
                'Đại trà',
                '7810101',
                'Du Lịch',
                `${d01.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Không có môn hệ số 2'
            ],

            // CLC - Ngôn ngữ anh
            [
                'CLC',
                '7220201C',
                'Ngôn ngữ Anh CLC',
                `${a01hs2nn.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7220201C',
                'Ngôn ngữ Anh CLC',
                `${d01hs2nn.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7220201C',
                'Ngôn ngữ Anh CLC',
                `${d14hs2nn.toFixed(2)}`,
                'Văn, Sử, Anh (D14)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7220201C',
                'Ngôn ngữ Anh CLC',
                `${d78hs2nn.toFixed(2)}`,
                'Văn, KHXH, Anh (D78)',
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Ngôn ngữ Trung Quốc
            [
                'CLC',
                '7220204C',
                'Ngôn ngữ Trung Quốc CLC',
                `${d01hs2nn.toFixed(2)}`,
                `Văn, Toán, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7220204C',
                'Ngôn ngữ Trung Quốc CLC',
                `${d78hs2nn.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Ngôn ngữ Nhật
            [
                'CLC',
                '7220209C',
                'Ngôn ngữ Nhật CLC',
                `${d01hs2nn.toFixed(2)}`,
                `Văn, Toán, Ngoại Ngữ <br> (D01-D06, DD2)`,
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7220209C',
                'Ngôn ngữ Nhật CLC',
                `${d78hs2nn.toFixed(2)}`,
                `Văn, KHXH, Ngoại Ngữ <br> (D78-D83, DH8)`,
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Kinh tế (Ngành mới)   
            [
                'CLC',
                '7310101C',
                'Kinh tế CLC (Ngành mới)',
                `${d07hs2nn.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7310101C',
                'Kinh tế CLC (Ngành mới)',
                `${a01hs2nn.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7310101C',
                'Kinh tế CLC (Ngành mới)',
                `${d01hs2nn.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7310101C',
                'Kinh tế CLC (Ngành mới)',
                `${d96hs2nn.toFixed(2)}`,
                'Toán, KHXH, Anh (D96)',
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Quản Trị Kinh Doanh   
            [
                'CLC',
                '7340101C',
                'Quản Trị Kinh Doanh CLC',
                `${d07hs2nn.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340101C',
                'Quản Trị Kinh Doanh CLC',
                `${a01hs2nn.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340101C',
                'Quản Trị Kinh Doanh CLC',
                `${d01hs2nn.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340101C',
                'Quản Trị Kinh Doanh CLC',
                `${d96hs2nn.toFixed(2)}`,
                'Toán, KHXH, Anh (D96)',
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Tài Chính Ngân Hàng   
            [
                'CLC',
                '7340201C',
                'Tài Chính Ngân Hàng CLC',
                `${d07hs2nn.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340201C',
                'Tài Chính Ngân Hàng CLC',
                `${a01hs2nn.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340201C',
                'Tài Chính Ngân Hàng CLC',
                `${d01hs2nn.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340201C',
                'Tài Chính Ngân Hàng CLC',
                `${d96hs2nn.toFixed(2)}`,
                'Toán, KHXH, Anh (D96)',
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Kế Toán   
            [
                'CLC',
                '7340301C',
                'Kế Toán CLC',
                `${d07hs2nn.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340301C',
                'Kế Toán CLC',
                `${a01hs2nn.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340301C',
                'Kế Toán CLC',
                `${d01hs2nn.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7340301C',
                'Kế Toán CLC',
                `${d96hs2nn.toFixed(2)}`,
                'Toán, KHXH, Anh (D96)',
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Luật Kinh Tế   
            [
                'CLC',
                '7380107C',
                'Luật Kinh Tế CLC',
                `${d07hs2nn.toFixed(2)}`,
                'Toán, Hóa, Anh (D07)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7380107C',
                'Luật Kinh Tế CLC',
                `${a01hs2nn.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7380107C',
                'Luật Kinh Tế CLC',
                `${d01hs2nn.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Ngoại ngữ hệ số 2'
            ],
            [
                'CLC',
                '7380107C',
                'Luật Kinh Tế CLC',
                `${d14hs2nn.toFixed(2)}`,
                'Văn, Sử, Anh (D14)',
                'Môn Ngoại ngữ hệ số 2'
            ],

            // CLC - Công Nghệ Sinh Học   
            [
                'CLC',
                '7420201C',
                'Công Nghệ Sinh Học CLC',
                `${d08.toFixed(2)}`,
                'Toán, Sinh, Anh (D08)',
                'Không có môn hệ số 2'
            ],
            [
                'CLC',
                '7420201C',
                'Công Nghệ Sinh Học CLC',
                `${a01.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Không có môn hệ số 2'
            ],
            [
                'CLC',
                '7420201C',
                'Công Nghệ Sinh Học CLC',
                `${b00.toFixed(2)}`,
                'Toán, Hóa, Sinh (B00)',
                'Không có môn hệ số 2'
            ],
            [
                'CLC',
                '7420201C',
                'Công Nghệ Sinh Học CLC',
                `${d07.toFixed(2)}`,
                'Toán, Hoá, Anh (D07)',
                'Không có môn hệ số 2'
            ],

            // CLC - Khoa Học Máy Tính   
            [
                'CLC',
                '7480101C',
                'Khoa Học Máy Tính CLC',
                `${a00hs2t.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Môn Toán hệ số 2'
            ],
            [
                'CLC',
                '7480101C',
                'Khoa Học Máy Tính CLC',
                `${a01hs2t.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Toán hệ số 2'
            ],
            [
                'CLC',
                '7480101C',
                'Khoa Học Máy Tính CLC',
                `${d01hs2t.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Toán hệ số 2'
            ],
            [
                'CLC',
                '7480101C',
                'Khoa Học Máy Tính CLC',
                `${d07hs2t.toFixed(2)}`,
                'Toán, Hoá, Anh (D07)',
                'Môn Toán hệ số 2'
            ],

            // CLC - CNKT Công Trình Xây Dựng   
            [
                'CLC',
                '7510102C',
                'CNKT Công Trình Xây Dựng CLC',
                `${a00hs2t.toFixed(2)}`,
                'Toán, Lý, Hóa (A00)',
                'Môn Toán hệ số 2'
            ],
            [
                'CLC',
                '7510102C',
                'CNKT Công Trình Xây Dựng CLC',
                `${a01hs2t.toFixed(2)}`,
                'Toán, Lý, Anh (A01)',
                'Môn Toán hệ số 2'
            ],
            [
                'CLC',
                '7510102C',
                'CNKT Công Trình Xây Dựng CLC',
                `${d01hs2t.toFixed(2)}`,
                'Toán, Văn, Anh (D01)',
                'Môn Toán hệ số 2'
            ],
            [
                'CLC',
                '7510102C',
                'CNKT Công Trình Xây Dựng CLC',
                `${d07hs2t.toFixed(2)}`,
                'Toán, Hoá, Anh (D07)',
                'Môn Toán hệ số 2'
            ],
        ]

        $('#grade-table').DataTable({
            destroy: true,
            data: dxt,
            "lengthMenu": [
                [5, 10, 15, 20, 25, -1],
                [5, 10, 15, 20, 25, "Tất cả"]
            ],
            "oLanguage": {
                "sSearch": "Tìm kiếm",
                "sLengthMenu": "Hiển thị _MENU_ dòng",
                "sInfo": "Đang hiện thị dòng _START_ đến _END_ trong _TOTAL_ dòng",
                "sInfoFiltered": " - lọc từ _MAX_ dòng",
                "sInfoEmpty": "Không tìm thấy dữ liệu",
                "oPaginate": {
                    "sPrevious": "<",
                    "sNext": ">"
                }
            },
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            }
        });
    }
}