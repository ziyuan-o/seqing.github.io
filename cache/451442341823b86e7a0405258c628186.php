<header id="masthead" class="site-header clear">
	<div class="container">
		<div class="site-branding">
			<div id="logo">
				<a href="/" class="custom-logo-link" rel="home" aria-current="page">
					<img width="430" height="180" src="<?php echo $this->value['WebLogo']; ?>" class="custom-logo" />
				</a>
			</div>
		</div>
		<style>
			@media screen and (min-width: 900px) and (max-width: 1200px),
			(min-width: 1200px) {
				#pcitem {
					display: block;
				}

				.m-item,
				.m-show,
				.m-none {
					display: none !important;
					;
				}

			}

			@media only screen and (max-width: 959px) {
				#pcitem {
					display: none;
				}

				.m-item {
					display: block;
				}
			}
		</style>
		<nav id="primary-nav" class="primary-navigation tablet_menu_col_8 phone_menu_col_4">
			<div class="menu-container" style="margin-top: -25px;">
				<ul id="primary-menu" class="sf-menu nav-x">
					<li
						class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
						<a href="/" aria-current="page">
							首页
						</a>
					</li>
					<?php $vodtypes=(array)$this->value['数据分类'];$shuzu='1,2,3,4,5,6';$explode=explode(',',$shuzu);$count=count($explode);$data=array();for ($x=0; $x<=$count-1; $x++) {$aass=$explode[$x];$data[$x]=$explode[$x];}$countt=count($data);for ($x=0; $x<=$countt-1; $x++) {$fenleivod=$vodtypes[$data[$x]];$name=$fenleivod['name'];$id=$fenleivod['id'];$type=$fenleivod['type'];?> 
					<li
						class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
						<a href="<?php     echo $Host1.$type.'_list'.$Host2.$id.$Host3.'1'.$Host4;?>" aria-current="page">
							<?php echo $name?>
						</a>
					</li>
					<?php } ?>
					<li id="pcitem"
						class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-394">
						<a href="javascript:void(0);" class="sf-with-ul" id="showClass">
							更多
						</a>
						<ul class="sub-menu" style="display: none;" id="sub-menu">
							<?php $vodtypes=(array)$this->value['数据分类'];$shuzu='7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25';$explode=explode(',',$shuzu);$count=count($explode);$data=array();for ($x=0; $x<=$count-1; $x++) {$aass=$explode[$x];$data[$x]=$explode[$x];}$countt=count($data);for ($x=0; $x<=$countt-1; $x++) {$fenleivod=$vodtypes[$data[$x]];$name=$fenleivod['name'];$id=$fenleivod['id'];$type=$fenleivod['type'];?> 
							<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-543">
								<a href="<?php     echo $Host1.$type.'_list'.$Host2.$id.$Host3.'1'.$Host4;?>">
									<?php echo $name?> </a>
							</li>
						<?php } ?>
						</ul>
					</li>
					<!-- 更多分类 -->
					<?php $vodtypes=(array)$this->value['数据分类'];$shuzu='7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25';$explode=explode(',',$shuzu);$count=count($explode);$data=array();for ($x=0; $x<=$count-1; $x++) {$aass=$explode[$x];$data[$x]=$explode[$x];}$countt=count($data);for ($x=0; $x<=$countt-1; $x++) {$fenleivod=$vodtypes[$data[$x]];$name=$fenleivod['name'];$id=$fenleivod['id'];$type=$fenleivod['type'];?> 
					<li class="menu-item menu-item-type-taxonomy menu-item-object-category m-item m-cook">
						<a href="<?php     echo $Host1.$type.'_list'.$Host2.$id.$Host3.'1'.$Host4;?>">
							<?php echo $name?></a>
					</li>
					<?php } ?>
					<li class="menu-item menu-item-type-taxonomy menu-item-object-category m-item m-show">
						<a href="javascript:void(0)" onclick="setcookie()">
							更多分类▼
						</a>
					</li>
					<li class="menu-item menu-item-type-taxonomy menu-item-object-category m-item m-none" style="float: right;">
						<a href="javascript:void(0)" onclick="delcookie()">
							收回分类▲
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<script type='text/javascript' src='<?php echo $this->value['StylePath']; ?>/js/jquery-3.5.1.min.js'></script>
		<script>
			document.getElementById('showClass').addEventListener('click', function(event) {
			    // 阻止默认行为，例如跳转到href指定的链接
			    event.preventDefault();
			    // 执行其他操作
				const menu = document.getElementById('sub-menu');
				if(menu.style.display == 'none'){
					document.getElementById('sub-menu').style.display = 'block';
				}else{
					document.getElementById('sub-menu').style.display = 'none';
				}
			     
			});
			var sessiondata = sessionStorage.getItem("agreed");
			if (!sessiondata) {
				$('.m-cook').hide();
				$('.m-none').hide();
				$('.m-show').show();
			} else {
				$('.m-show').hide();
			}

			function setcookie() {
				sessionStorage.setItem("agreed", "true");
				$('.m-cook').show();
				$('.m-none').show();
				$('.m-show').hide();
			}

			function delcookie() {
				sessionStorage.removeItem("agreed");
				$('.m-cook').hide();
				$('.m-none').hide();
				$('.m-show').show();
			}
		</script>
			
		<div class="header-search" style="display: block;">
			<form>
				<input type="search" value="" name="search" class="search-input" placeholder="输入关键词" autocomplete="off">
				<button type="submit" class="search-submit">
					搜索
				</button>
			</form>
		</div>
	</div>
</header>
<style>
	@media only screen and (max-width: 959px) {
	    .header-search {
	        top: 0px;
	        right: 0px;
	        width: 256px;
			margin-top: 15px;
	        height: 30px;
	    }
		.header-search .search-input{
			padding-left: 0px;
			height: 30px;
		}
		.header-search .search-submit {
		    box-shadow: none;
		    border-radius: 2px;
		    color: #fff;
		    font-size: 16px;
		    height: 30px;
			top: 0px;
		    position: absolute;
		    right: 0px;
		    padding: 0 12px;
		}
		input::placeholder{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.header-search:after{
			display: none;
		}
	}
</style>