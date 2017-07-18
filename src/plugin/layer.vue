<template>
    <div class="ov_z">
        <!--当前位置 start-->
        <div class="page_location_a mg_t15 ov_z">
            <ul>
                <li><a href="javascript:;"><span class="d_i_b fl">插件</span><i class="icon_arrow icon_bg d_i_b fl"></i></a></li>
                <li class="active"><a href="javascript:;"><span class="d_i_b fl">弹窗</span></a></li>
            </ul>
        </div>
        <!--当前位置 start-->


        <!--弹窗 start-->
        <div class="ov_z">
            <a class="btn_a btn_submit" href="javascript:;" onclick="showLayer('layer_01')">点我显示弹窗01</a>
            <a class="btn_a btn_submit mg_l20" href="javascript:;" onclick="showLayer('layer_02')">点我显示弹窗02</a>
        </div>
        <!--弹窗 end-->

        <!--layer_bg start-->
        <div class="layer_bg dn_n"></div>
        <!--layer_bg end-->
        <!--layer_01 start-->
        <div class="mod_layer ov_z dn_n" id="layer_01" style="display: block;">
            <img class="cl_open_box" onclick="" src="/static/images/close_it.png">
            <h3 class="title_b">弹窗01</h3>
            <div class="ov_z jd_scrollbar layer_mod_content">
                <form>
                    <div class="ov_z wid_100p pd_l30 pd_r30 mg_t20">
                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">Password：</label>
                            <div class="ov_z fl wid_80p">
                                <input type="password" placeholder="Password" class="form_input">
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">tel：</label>
                            <div class="ov_z fl wid_80p"><input type="tel" placeholder="tel" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">email：</label>
                            <div class="ov_z fl wid_80p"><input type="email" placeholder="email" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">text：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="text" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">textarea：</label>
                            <div class="ov_z fl wid_80p"><textarea class="form_input" name="" placeholder="textarea"></textarea></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">error：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="error" class="form_input error"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">warning：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="warning" class="form_input warning"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">select：</label>
                            <div class="ov_z fl wid_80p">
                                <select class="form_input" name="">
                                    <option class="dn" value="">请选择</option>
                                    <option value="select_1">select_1</option>
                                    <option value="select_2">select_2</option>
                                    <option value="select_3">select_3</option>
                                    <option value="select_4">select_4</option>
                                    <option value="select_5">select_5</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="ov_z wid_100p pd_l30 pd_r30 mg_b20">
                        <div class="ov_z fr wid_80p">
                            <input class="btn_a btn_cancel fl mg_r15" onclick="" type="reset" value="取消" />
                            <input class="btn_a btn_submit fl" type="submit" onclick="" value="提交" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!--layer_01 end-->

        <!--layer_02 start-->
        <div class="mod_layer ov_z dn_n" id="layer_02" style="display: block;">
            <img class="cl_open_box" onclick="" src="/static/images/close_it.png">
            <h3 class="title_b">弹窗02</h3>
            <div class="ov_z jd_scrollbar layer_mod_content">
                <form>
                    <div class="ov_z wid_100p pd_l30 pd_r30 mg_t20">
                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">Password：</label>
                            <div class="ov_z fl wid_80p">
                                <input type="password" placeholder="Password" class="form_input">
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">tel：</label>
                            <div class="ov_z fl wid_80p"><input type="tel" placeholder="tel" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">email：</label>
                            <div class="ov_z fl wid_80p"><input type="email" placeholder="email" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">text：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="text" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">textarea：</label>
                            <div class="ov_z fl wid_80p"><textarea class="form_input" name="" placeholder="textarea"></textarea></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">error：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="error" class="form_input error"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">warning：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="warning" class="form_input warning"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">select：</label>
                            <div class="ov_z fl wid_80p">
                                <select class="form_input" name="">
                                    <option class="dn" value="">请选择</option>
                                    <option value="select_1">select_1</option>
                                    <option value="select_2">select_2</option>
                                    <option value="select_3">select_3</option>
                                    <option value="select_4">select_4</option>
                                    <option value="select_5">select_5</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="ov_z wid_100p pd_l30 pd_r30 mg_b20">
                        <div class="ov_z fr wid_80p">
                            <input class="btn_a btn_cancel fl mg_r15" onclick="hideLayer('layer_02')" type="reset" value="取消" />
                            <input class="btn_a btn_submit fl" type="submit" onclick="hideLayer('layer_02')" value="提交" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!--layer_02 end-->
    </div>
</template>
<script>
    export default {
      name: 'formValidate'
    }
</script>
