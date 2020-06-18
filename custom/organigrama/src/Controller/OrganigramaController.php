<?php

namespace Drupal\organigrama\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


class OrganigramaController extends ControllerBase {


  public function organigrama(){
    
    return [
      '#theme' => 'organigrama',
    ];
  }

  

}