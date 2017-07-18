<template>
    <div class="ov_z">
        <!--当前位置 start-->
        <div class="page_location_a mg_t15 ov_z">
            <ul>
                <li><a href="javascript:;"><span class="d_i_b fl">组件</span><i class="icon_arrow icon_bg d_i_b fl"></i></a></li>
                <li class="active"><a href="javascript:;"><span class="d_i_b fl">表单验证</span></a></li>
            </ul>
        </div>
        <!--当前位置 start-->

        <!--单列50%宽 start-->
        <div class="ov_z wid_100p pd_b30">
            <form action="" id="formTest" name="">
                <div class="ov_z bg_fa pd_b30">
                    <h3 class="font_16 font_b mg_b22 line_h48 bor_b_d_c pd_l15">表单验证</h3>
                    <div class="ov_z wid_50p pd_l30 pd_r30 mg_c">
                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">Password：</label>
                            <div class="ov_z fl wid_65P">
                                <input type="password" placeholder="Password" name="Password" class="form_input">
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">tel：</label>
                            <div class="ov_z fl wid_65P"><input type="tel" name="tel" placeholder="tel" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">email：</label>
                            <div class="ov_z fl wid_65P"><input type="email" name="email" placeholder="email" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">text：</label>
                            <div class="ov_z fl wid_65P"><input type="text" name="text" placeholder="text" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">textarea：</label>
                            <div class="ov_z fl wid_65P"><textarea class="form_input" name="textarea" placeholder="textarea"></textarea></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">select：</label>
                            <div class="ov_z fl wid_65P">
                                <select class="form_input" name="select_a">
                                    <option value="">请选择</option>
                                    <option value="select_1">select_1</option>
                                    <option value="select_2">select_2</option>
                                    <option value="select_3">select_3</option>
                                    <option value="select_4">select_4</option>
                                    <option value="select_5">select_5</option>
                                </select>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">多选框行内排序：</label>
                            <div class="ov_z fl wid_65P">
                                <div class="checkbox_a">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" type="checkbox" class="checkbox_a_input" value="checkbox_1_1" name="checkbox_1" />
                                    <span>未选</span>
                                </div>
                                <div class="checkbox_a">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" type="checkbox" class="checkbox_a_input" value="checkbox_1_2" name="checkbox_1" />
                                    <span>已选</span>
                                </div>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">单选框行内排序：</label>
                            <div class="ov_z fl wid_65P">
                                <div class="radio_box_a">
                                    <div class="radio_box_a_ui"></div>
                                    <input placeholder="" type="radio" class="radio_box_a_input" value="radio_1" name="radioBox_1" />
                                    <span>radio_1未选</span>
                                </div>
                                <div class="radio_box_a">
                                    <div class="radio_box_a_ui"></div>
                                    <input placeholder="" type="radio" class="radio_box_a_input" value="radio_2" name="radioBox_1" />
                                    <span>radio_2已选</span>
                                </div>
                            </div>
                        </div>

                        <div class="ov_z form_div">
                            <div class="ov_z fr wid_65P">
                                <input class="btn_a btn_cancel fl mg_r15" type="reset" value="重置" />
                                <input class="btn_a btn_submit fl" type="submit" value="提交" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!--单列50%宽 end-->
    </div>
</template>
<script>
    export default {
      name: 'formValidate'
    }
</script>
