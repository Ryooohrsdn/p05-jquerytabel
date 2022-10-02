$(document).ready(function(){
    $('.kolom').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_baris = rid[1];
        let nama = $('#namake__'+id_baris).text();
  
        if(isi=='Hapus'){
            let konfirmasi = confirm(`Yakin ingin menghapus ${nama} ?`);
            if(!konfirmasi) return;
  
            $('#bariske__'+id_baris).fadeOut();
  
        }else{
            alert("Kamu memilih: " + $(this).html() + "!");
        }
    })
  })
  