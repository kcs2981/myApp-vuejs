<template>
    <div class="ov_z">
        <!--当前位置 start-->
        <div class="page_location_a mg_t15 ov_z">
            <ul>
                <li><a href="javascript:;"><span class="d_i_b fl">组件</span><i class="icon_arrow icon_bg d_i_b fl"></i></a></li>
                <li class="active"><a href="javascript:;"><span class="d_i_b fl">表格</span></a></li>
            </ul>
        </div>
        <!--当前位置 start-->

        <!--datatables start-->
        <div class="mod_table bg_f dn">
            <table id="devTable">
                <thead>
                <tr>
                    <th style="width:15%; word-break: break-all">账号名</th>
                    <th style="width:12%; word-break: break-all">姓名</th>
                    <th style="width:15%; word-break: break-all">电话号码</th>
                    <th style="width:15%; word-break: break-all">手机号码</th>
                    <th style="width:10%; word-break: break-all">职位</th>
                    <th style="width:11%; word-break: break-all">是否为管理员</th>
                    <th style="width:12%; word-break: break-all">状态</th>
                    <th style="width:10%; word-break: break-all">操作</th>
                </tr>
                </thead>
            </table>
        </div>
        <!--datatables end-->
    </div>
</template>
<script>
    export default {
      name: 'formValidate'
    }
</script>
