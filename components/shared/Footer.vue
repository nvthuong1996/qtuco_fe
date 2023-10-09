<template>
  <div class="footer orange">
    <div class="container white--text">
      <v-row class="pa-0 ma-0">
        <v-col class="col-md-6 col-12">
          <div class="footer-widget">
            <h4>THÔNG TIN CÔNG TY</h4>
            <ul class="list-menu information pa-0">
              <li>
                <v-icon class="subtitle-2"> mdi-map-marker </v-icon>Số 2, Ngõ 73 Đường Nguyễn Trãi, Quận Thanh Xuân, TP.Hà Nội.
              </li>
              <li>
                <v-icon class="subtitle-2"> mdi-phone </v-icon>
                Điện thoại:
                <a href="tel:0984019283" title="0984019283">0823 282 292</a>
              </li>
              <li>
                <v-icon class="subtitle-2">mdi-email</v-icon>
                Email:
                <a
                  href="mailto:qtucocompany@gmail.com"
                  title="qtucocompany@gmail.com"
                  >qtucocompany@gmail.com</a
                >
              </li>
            </ul>
          </div>
        </v-col>
        <v-col class="col-md-4 col-12 pl-md-12">
          <div class="footer-widget">
            <h4>LĨNH VỰC HOẠT ĐỘNG</h4>
            <ul class="list-menu has-toggle">
              <li>Sản xuất, cung cấp các sản phẩm điện Mặt trời, điện gió</li>
              <li>Thi công lắp đặt điện mặt trời, điện gió</li>
              <li>Tổng thầu MEP</li>
              <li>Tổng thầu xây dựng, xây lắp</li>
            </ul>
          </div>
        </v-col>
        <v-col class="col-md-2 col-12">
          <v-img
            class="logo ma-auto"
            :src="require('@/assets/home/logo.png')"
            alt="default-avatar"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  h4 {
    text-decoration: underline;
  }
  .list-menu {
    li {
      list-style: none;
      margin-top: 8px;
    }
  }
  .has-toggle {
    li {
      list-style: square;
    }
  }
  .logo {
    width: 160px;
  }
}
</style>
