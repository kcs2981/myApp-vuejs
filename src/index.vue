<template>
    <div class="ov_z width_auto mod_page" id="index">
        <v-header></v-header>
        <!--content start-->
        <div class="ov_z mod_content">
            <v-leftNav></v-leftNav>
            <!--主窗口 start-->
            <div class="ov_z content_page pd_0_30 jd_scrollbar">
                <router-view></router-view>
            </div>
            <!--主窗口 end-->
        </div>
        <!--content end-->
    </div>
</template>

<script>
    import header from './header/header'
    import leftNav from './leftNav/leftNav'
    export default {
      name: 'index',
      components: {
        'v-header': header,
        'v-leftNav': leftNav
      }
    }
</script>
