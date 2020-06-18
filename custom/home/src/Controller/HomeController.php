<?php

namespace Drupal\home\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


/**
 * Defines HomeController class.
 * 
 * 
 */

class HomeController extends ControllerBase {

  /**
   * Display the markup.
   *
   * @return array
   *   Return markup array.
   */

  

  public function hello() {

    $nombre = \Drupal::currentUser()->getUsername();

    $contenido = \Drupal::entityTypeManager()->getStorage('node')->load('5');
    $title = $contenido->title->value;
    $image = $contenido->get('field_image')->entity->uri->value;
    $url = file_create_url($image);

    

    $terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree('test1');
      foreach ($terms as $term) {
        $term_data[] = array(
          'name' => $term->name
         );
    }
    
    
    return [
      '#theme' => 'my_template',
      '#title' => $title,
      '#url' => $url,
      '#nombre' => $nombre,
      '#test_var' => $this->t('wealytuytuue'),
      '#name' => $term_data,
    ];
  }

  public function bye() {

    $data = [];
    $arr = [];

    $query = \Drupal::entityQuery('node')->condition('type', 'slider_content');
    $nids = $query->execute();
    $nodes = \Drupal\node\Entity\Node::loadMultiple($nids);

    foreach ($nodes as $node) {
          $title = $node->field_slide_h3_title->value;
          $body = $node->body->value;
          $url = file_create_url($node->field_slide_image->entity->uri->value);
          $link = $node->field_slide_link->first()->getUrl()->toString();
          $data = ["title"=> $title,
                  "link"=>$link,
                  "url"=>$url,
                  "body"=>$body,
          ];
          $arr[]=$data; 
      }        
      
  //   $slide1 = \Drupal::entityTypeManager()->getStorage('node')->load('8');
  //   $title1 = $slide1->field_slide_h3_title->value;
  //   $body1 = $slide1->body->value;
  //   $url1 = file_create_url($slide1->field_slide_image->entity->uri->value);
  //   $link1 = $slide1->field_slide_link->first()->getUrl()->toString();

  //   if(\Drupal::entityTypeManager()->getStorage('node')->load('11')){
  //   $slide4 = \Drupal::entityTypeManager()->getStorage('node')->load('11');
  //   $title4 = $slide4->field_slide_h3_title->value;
  //   $body4 = $slide4->body->value;
  //   $image4 = $slide4->field_slide_image->entity->uri->value;
  //   $url4 = file_create_url($image4);
  //   $link4 = $slide4->field_slide_link->first()->getUrl()->toString();
  //   }else{
  //     $title4 = NULL;
  //     $body4 = NULL;
  //     $url4 = NULL;
  //     $link4 = NULL;
  //   };

    // $bid = 2;
    // $block_content = BlockContent::load($bid);

    // $rendered_block = \Drupal::entityTypeManager()
    //   ->getViewBuilder('block_content')
    //   ->view($block_content);

    // $view = views_embed_view('ansv_slider', 'block_1');  

    return [
      '#theme' => 'home',
      '#test_var' => $this->t('4546'),
      '#name' => $this->t('bbbbb'),
      // '#my_block' => $rendered_block,
      // '#view' => $view,
      // '#title1' => $title1,
      // '#body1' => $body1,
      // '#url1' => $url1,
      // '#link1' => $link1,
      // '#title4' => $title4,
      // '#body4' => $body4,
      // '#url4' => $url4,
      // '#link4' => $link4,
      '#arr' => $arr,

    ];
  }
 

}