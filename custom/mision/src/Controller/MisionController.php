<?php

namespace Drupal\mision\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class MisionController extends ControllerBase {


  public function mision(){
    
    return [
      '#theme' => 'mision',
    ];
  }

  

}