<?php

namespace Drupal\hello_world\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\block_content\Entity\BlockContent;


/**
 * Defines HelloController class.
 * 
 * 
 */

class HelloController extends ControllerBase {

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

    $query = \Drupal::entityQuery('node')->condition('type', 'slider_content');
    $nids = $query->execute();
    $nodes = \Drupal\node\Entity\Node::loadMultiple($nids);

    foreach ($nodes as $node) {
     $node->title->value;     
    }
   
    $slide1 = \Drupal::entityTypeManager()->getStorage('node')->load('8');
    $title1 = $slide1->field_slide_h3_title->value;
    $body1 = $slide1->body->value;
    $url1 = file_create_url($slide1->field_slide_image->entity->uri->value);
    $link1 = $slide1->field_slide_link->first()->getUrl()->toString();

    $slide2 = \Drupal::entityTypeManager()->getStorage('node')->load('9');
    $title2 = $slide2->field_slide_h3_title->value;
    $body2 = $slide2->body->value;
    $image2 = $slide2->field_slide_image->entity->uri->value;
    $url2 = file_create_url($image2);
    $link2 = $slide2->field_slide_link->first()->getUrl()->toString();

    $slide3 = \Drupal::entityTypeManager()->getStorage('node')->load('10');
    $title3 = $slide3->field_slide_h3_title->value;
    $body3 = $slide3->body->value;
    $image3 = $slide3->field_slide_image->entity->uri->value;
    $url3 = file_create_url($image3);
    $link3 = $slide3->field_slide_link->first()->getUrl()->toString();

    if(\Drupal::entityTypeManager()->getStorage('node')->load('11')){
    $slide4 = \Drupal::entityTypeManager()->getStorage('node')->load('11');
    $title4 = $slide4->field_slide_h3_title->value;
    $body4 = $slide4->body->value;
    $image4 = $slide4->field_slide_image->entity->uri->value;
    $url4 = file_create_url($image4);
    $link4 = $slide4->field_slide_link->first()->getUrl()->toString();
    }else{
      $title4 = NULL;
      $body4 = NULL;
      $url4 = NULL;
      $link4 = NULL;
    };
    
    if(\Drupal::entityTypeManager()->getStorage('node')->load('12')){
    $slide5 = \Drupal::entityTypeManager()->getStorage('node')->load('12');
    $title5 = $slide5->field_slide_h3_title->value;
    $body5 = $slide5->body->value;
    $image5 = $slide5->field_slide_image->entity->uri->value;
    $url5 = file_create_url($image5);
    $link5 = $slide5->field_slide_link->first()->getUrl()->toString();
    }else{
      $title5 = NULL;
      $body5 = NULL;
      $url5 = NULL;
      $link5 = NULL;
  };

   

    $bid = 2;
    $block_content = BlockContent::load($bid);

    $rendered_block = \Drupal::entityTypeManager()
      ->getViewBuilder('block_content')
      ->view($block_content);

    $view = views_embed_view('ansv_slider', 'block_1');  

    return [
      '#theme' => 'bye',
      '#test_var' => $this->t('4546'),
      '#name' => $this->t('bbbbb'),
      '#my_block' => $rendered_block,
      '#view' => $view,
      '#title1' => $title1,
      '#body1' => $body1,
      '#url1' => $url1,
      '#link1' => $link1,
      '#title2' => $title2,
      '#body2' => $body2,
      '#url2' => $url2,
      '#link2' => $link2,
      '#title3' => $title3,
      '#body3' => $body3,
      '#url3' => $url3,
      '#link3' => $link3,
      '#title4' => $title4,
      '#body4' => $body4,
      '#url4' => $url4,
      '#link4' => $link4,
      '#title5' => $title5,
      '#body5' => $body5,
      '#url5' => $url5,
      '#link5' => $link5,

    ];
  }
 

}