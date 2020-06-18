<?php

namespace Drupal\agencia\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class AgenciaController extends ControllerBase {


  public function agencia(){
    
    return [
      '#theme' => 'agencia',
    ];
  }

  

}