<script>
  
</script>



<style scoped>


.wallet_box {
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 100%;
 height: calc(100vh - 40px);
 max-width: 768px;
 border-radius: 10px;
 overflow: hidden;
 background-color: #FFF;
 box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3);
}

.wallet_box .wallet_panel {
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #AAA;
 margin-bottom: 20px;
 padding: 10px;
}

.wallet_box .wallet_panel .wallet_account {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
}

.wallet_box .wallet_panel .wallet_account .wallet_address img {
 width: 16px;
}

.wallet_box .wallet_panel .wallet_menu {
 display: flex;
 flex-direction: column;
 gap: 10px;
}

.wallet_box .wallet_panel .wallet_item {
 padding: 7px;
 font-weight: bold;
 border-radius: 15px;
 background-color: #DDD;
 text-align: center;
 cursor: pointer;
}

.wallet_box .wallet_content {
 display: flex;
 flex-direction: column;
 justify-content: center;
}

.wallet_box .wallet_content .wallet_balance {
 margin-bottom: 20px;
 text-align: center;
}

.wallet_box .wallet_content .wallet_balance .wallet_crypto {
 font-size: 26px;
 font-weight: bold;
}

.wallet_box .wallet_content .wallet_balance .wallet_fiat {
 font-size: 18px;
 color: #666;
}

.wallet_box .wallet_content .wallet_actions {
 display: flex;
 justify-content: center;
 gap: 10px;
 margin-bottom: 20px;
}

.wallet_box .wallet_content .wallet_actions .wallet_item {
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 text-align: center;
 width: 100px;
 padding: 10px;
 font-weight: bold;
 border-radius: 10px;
 background-color: #FA0;

}

.wallet_box .wallet_type {
 display: flex;
 justify-content: space-between;
 height: 50px;
}

.wallet_box .wallet_type .wallet_item {
 display: flex;
 justify-content: center;
 align-items: center;
 width: 50%;
 cursor: pointer;
}

.wallet_box .wallet_type .wallet_item.active {
 font-weight: bold;
 text-decoration: underline;
}

.wallet_box .wallet_assets .wallet_item {
 display: flex;
 align-items: center;
 padding: 10px;
 gap: 10px;
 cursor: pointer;
}

.wallet_box .wallet_assets .wallet_item:nth-child(odd) {
 background-color: #F3F3F3;
}

.wallet_box .wallet_assets .wallet_item:nth-child(even) {
 background-color: #DCDCDC;
}

.wallet_box .wallet_assets .wallet_item:hover {
 background-color: #CCC;
}

.wallet_box .wallet_assets .wallet_item img {
 width: 32px;
 height: 32px;
}

.wallet_box .wallet_assets .wallet_item .wallet_name {
 font-weight: bold;
}

.wallet_box .wallet_assets .wallet_item .wallet_amount {
 margin-left: auto;
 text-align: right;
}

.wallet_box .wallet_assets .wallet_item .wallet_amount .wallet_token {
 font-size: 18px;
 font-weight: bold;
}

.wallet_box .wallet_assets .wallet_item .wallet_amount .wallet_fiat {
 font-size: 14px;
 color: #666;
}

</style>



  <div class="wallet_box">
   <div class="wallet_panel">
    <div class="wallet_item">Polygon - mainnet ▼</div>
    <div class="wallet_account">
     <div class="wallet_item">My Yellow wallet ▼</div>
     <div class="wallet_address">0x123abc...123def <a href="#"><img src="img/icons_new/copy.svg" alt="Copy address" /></a></div>
    </div>
    <div class="wallet_menu">
     <div class="wallet_item">Settings</div>
     <div class="wallet_item">Logout</div>
    </div>

   </div>
   <div class="wallet_content">
    <div class="wallet_balance">
     <div class="wallet_crypto">8.33 MATIC</div>
     <div class="wallet_fiat">5.05 USD</div>
    </div>
    <div class="wallet_actions">
     <div class="wallet_item">Balance</div>
     <div class="wallet_item">Send</div>
     <div class="wallet_item">Receive</div>
     <div class="wallet_item">History</div>
    </div>
    <div class="wallet_type">
     <div class="wallet_item wallet_active">Tokens</div>
     <div class="wallet_item">NFTs</div>
    </div>
    <div class="wallet_assets">
     <div class="wallet_item">
      <div><img src="img/icons_new/yellow.svg" alt="YELLOW" /></div>
      <div class="wallet_name">YELLOW</div>
      <div class="wallet_amount">
       <div class="wallet_token">1,000 YELLOW</div>
       <div class="wallet_fiat">10,000 USD</div>
      </div>
     </div>
     <div class="wallet_item">
      <div><img src="img/icons_new/dai.svg" alt="DAI" /></div>
      <div class="wallet_name">DAI</div>
      <div class="wallet_amount">
       <div class="wallet_token">105 DAI</div>
       <div class="wallet_fiat">105 USD</div>
      </div>
     </div>
     <div class="wallet_item">
      <div><img src="img/icons_new/dot.svg" alt="DOT" /></div>
      <div class="wallet_name">DOT</div>
      <div class="wallet_amount">
       <div class="wallet_token">52.01 DOT</div>
       <div class="wallet_fiat">323.50 USD</div>
      </div>
     </div>
    </div>
   </div>
  </div>
  
  