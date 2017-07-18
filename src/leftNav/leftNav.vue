<template>
    <!--左侧导航 start-->
    <div class="nva_list bg_398deb ov_z" style="display: block">
        <div class="db ov_z icon_back_a"><div class="cur_p iconFont_back"></div></div>
        <ul class="ul_menu">
            <li class="firstLi active">
                <a href="javascript:;">
                    <div class="nav_icon db iconFont">&#xe695;</div>
                    <span class="nav_label">Dashboards</span><span class="icon_bg icon arrow fr mg_t15 mg_r15"></span>
                </a>
                <ul class="nav_second_level in">
                    <li><router-link to="/index">Dashboards 1.0</router-link></li>
                    <li><router-link to="/index2">Dashboards 2.0</router-link></li>
                    <li><router-link to="/index3">Dashboards 3.0<span class="icon_new fr mg_r30 font_12">NEW</span></router-link></li>
                </ul>
            </li>
            <li class="firstLi active">
                <a href="javascript:;">
                    <div class="nav_icon db iconFont">&#xe6a3;</div>
                    <span class="nav_label">组件</span><span class="icon_bg icon arrow fr mg_t15 mg_r15"></span>
                </a>
                <ul class="nav_second_level in">
                    <li><router-link to="/table">表格</router-link></li>
                    <li><router-link to="/formValidate">表单验证</router-link></li>
                    <li><router-link to="/layer">弹窗</router-link></li>
                </ul>
            </li>
            <li class="firstLi active">
                <a href="javascript:;">
                    <div class="nav_icon db iconFont">&#xe655;</div>
                    <span class="nav_label">表单</span><span class="icon_bg icon arrow fr mg_t15 mg_r15"></span>
                </a>
                <ul class="nav_second_level in">
                    <li><router-link to="/form1">单列</router-link></li>
                    <li><router-link to="/form2">多列</router-link></li>
                    <li><router-link to="/form">基本表单元素</router-link></li>
                </ul>
            </li>
            <li class="firstLi active">
                <a href="javascript:;">
                    <div class="nav_icon db iconFont">&#xe69e;</div>
                    <span class="nav_label">图标/按钮</span><span class="icon_bg icon arrow fr mg_t15 mg_r15"></span>
                </a>
                <ul class="nav_second_level in">
                    <li><router-link to="/icon">icon</router-link></li>
                    <li><router-link to="/button">button</router-link></li>
                </ul>
            </li>
        </ul>
    </div>
    <!--左侧导航 end-->
</template>

<script>
    export default {
      name: 'leftNav'
    }
</script>
