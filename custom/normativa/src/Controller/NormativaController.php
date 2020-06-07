<?php

namespace Drupal\normativa\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class NormativaController extends ControllerBase {


  public function normativa(){
    
    return [
      '#theme' => 'normativa',
    ];
  }

  

}