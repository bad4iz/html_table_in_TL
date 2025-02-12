
export const output = [
  {
    "Header": "№ п/п",
    "accessor": "№_п/п",
    "columns": [
      {
        "Header": "1",
        "accessor": "num"
      }
    ],
    "rowSpan": 6
  },
  {
    "Header": "ГРБС",
    "accessor": "грбс",
    "columns": [
      {
        "Header": "2",
        "accessor": "grbs_short_name"
      }
    ],
    "rowSpan": 6
  },
  {
    "Header": "Балансодержатель",
    "accessor": "балансодержатель",
    "columns": [
      {
        "Header": "3",
        "accessor": "owner_name"
      }
    ],
    "rowSpan": 6
  },
  {
    "Header": "Дворовая территория",
    "accessor": "дворовая_территория",
    "columns": [
      {
        "Header": "Идентификатор",
        "accessor": "идентификатор",
        "columns": [
          {
            "Header": "4",
            "accessor": "short_root_id"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Наименование",
        "accessor": "наименование",
        "columns": [
          {
            "Header": "5",
            "accessor": "name"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Дата начала действия паспорта",
        "accessor": "дата_начала_действия_паспорта",
        "columns": [
          {
            "Header": "6",
            "accessor": "start_date"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Дата окончания действия паспорта",
        "accessor": "дата_окончания_действия_паспорта",
        "columns": [
          {
            "Header": "7",
            "accessor": "end_date"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Дата подписания",
        "accessor": "дата_подписания",
        "columns": [
          {
            "Header": "8",
            "accessor": "sign_date"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Статус",
        "accessor": "статус",
        "columns": [
          {
            "Header": "9",
            "accessor": "object_status_name"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Требует актуализации",
        "accessor": "требует_актуализации",
        "columns": [
          {
            "Header": "10",
            "accessor": "update_required"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Дата присвоения статуса Требует актуализации",
        "accessor": "дата_присвоения_статуса_требует_актуализации",
        "columns": [
          {
            "Header": "11",
            "accessor": "update_required_date"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Сумма показателей",
        "accessor": "сумма_показателей",
        "columns": [
          {
            "Header": "12",
            "accessor": "equipment_sum"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Индекс оснащенности",
        "accessor": "индекс_оснащенности",
        "columns": [
          {
            "Header": "13",
            "accessor": "equipment_index"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Категория благоустройства",
        "accessor": "категория_благоустройства",
        "columns": [
          {
            "Header": "14",
            "accessor": "improvement_category_id"
          }
        ],
        "rowSpan": 5
      },
      {
        "Header": "Идентификатор версии",
        "accessor": "идентификатор_версии",
        "columns": [
          {
            "Header": "15",
            "accessor": "short_id"
          }
        ],
        "rowSpan": 5
      }
    ]
  },
  {
    "Header": "Общая площадная характеристика объекта",
    "accessor": "общая_площадная_характеристика_объекта",
    "columns": [
      {
        "Header": "Общая площадь",
        "accessor": "общая_площадь",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "16",
            "columns": [
              {
                "Header": "16",
                "accessor": "total_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Уборочная площадь",
        "accessor": "уборочная_площадь",
        "columns": [
          {
            "Header": "Уборочная площадь",
            "accessor": "уборочная_площадь",
            "columns": [
              {
                "Header": "Площадь, кв.м.",
                "accessor": "17",
                "columns": [
                  {
                    "Header": "17",
                    "accessor": "total_clean_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Уборка",
            "accessor": "уборка",
            "columns": [
              {
                "Header": "Площадь ручной уборки",
                "accessor": "площадь_ручной_уборки",
                "columns": [
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "18",
                    "columns": [
                      {
                        "Header": "18",
                        "accessor": "manual_clean_area"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Площадь механизированной уборки",
                "accessor": "площадь_механизированной_уборки",
                "columns": [
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "19",
                    "columns": [
                      {
                        "Header": "19",
                        "accessor": "auto_clean_area"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Площадь газонов",
            "accessor": "площадь_газонов",
            "columns": [
              {
                "Header": "Площадь, кв.м.",
                "accessor": "20",
                "columns": [
                  {
                    "Header": "20",
                    "accessor": "yard_green_lawns_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Площадь цветников",
            "accessor": "площадь_цветников",
            "columns": [
              {
                "Header": "Площадь, кв.м.",
                "accessor": "21",
                "columns": [
                  {
                    "Header": "21",
                    "accessor": "yard_green_flowers_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      }
    ]
  },
  {
    "Header": "Объекты капитального строительства",
    "accessor": "объекты_капитального_строительства",
    "columns": [
      {
        "Header": "Общее количество объектов капитального строительства",
        "accessor": "общее_количество_объектов_капитального_строительства",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "22",
            "columns": [
              {
                "Header": "22",
                "accessor": "yard_capital_building_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь объектов капитального строительства",
        "accessor": "общая_площадь_объектов_капитального_строительства",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "23",
            "columns": [
              {
                "Header": "23",
                "accessor": "yard_capital_building_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Жилые",
        "accessor": "жилые",
        "columns": [
          {
            "Header": "Дом блокированной застройки",
            "accessor": "дом_блокированной_застройки",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "24",
                "columns": [
                  {
                    "Header": "24",
                    "accessor": "yard_blocked_capital_building_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "25",
                "columns": [
                  {
                    "Header": "25",
                    "accessor": "yard_blocked_capital_building_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Индивидуальный жилой дом",
            "accessor": "индивидуальный_жилой_дом",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "26",
                "columns": [
                  {
                    "Header": "26",
                    "accessor": "yard_individual_capital_building_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "27",
                "columns": [
                  {
                    "Header": "27",
                    "accessor": "yard_individual_capital_building_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Многоквартирный дом",
            "accessor": "многоквартирный_дом",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "28",
                "columns": [
                  {
                    "Header": "28",
                    "accessor": "yard_residential_house_capital_building_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "29",
                "columns": [
                  {
                    "Header": "29",
                    "accessor": "yard_residential_house_capital_building_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Нежилые",
        "accessor": "нежилые",
        "columns": [
          {
            "Header": "Нежилое здание",
            "accessor": "нежилое_здание",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "30",
                "columns": [
                  {
                    "Header": "30",
                    "accessor": "yard_noresidential_capital_building_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "31",
                "columns": [
                  {
                    "Header": "31",
                    "accessor": "yard_noresidential_capital_building_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      }
    ]
  },
  {
    "Header": "Иной объект капитального строительства",
    "accessor": "иной_объект_капитального_строительства",
    "columns": [
      {
        "Header": "Общее количество иных объектов капитального строительства",
        "accessor": "общее_количество_иных_объектов_капитального_строительства",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "32",
            "columns": [
              {
                "Header": "32",
                "accessor": "yard_other_oks_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь иных объектов капитального строительства",
        "accessor": "общая_площадь_иных_объектов_капитального_строительства",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "33",
            "columns": [
              {
                "Header": "33",
                "accessor": "yard_other_oks_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Объект монументального искусства",
        "accessor": "объект_монументального_искусства",
        "columns": [
          {
            "Header": "Архитектурный памятник",
            "accessor": "архитектурный_памятник",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "34",
                "columns": [
                  {
                    "Header": "34",
                    "accessor": "yard_other_capital_building_architecture_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "35",
                "columns": [
                  {
                    "Header": "35",
                    "accessor": "yard_other_capital_building_architecture_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Иной тип монумента",
            "accessor": "иной_тип_монумента",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "36",
                "columns": [
                  {
                    "Header": "36",
                    "accessor": "yard_monument_other_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "37",
                "columns": [
                  {
                    "Header": "37",
                    "accessor": "yard_monument_other_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Мемориал",
            "accessor": "мемориал",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "38",
                "columns": [
                  {
                    "Header": "38",
                    "accessor": "yard_monument_memorial_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "39",
                "columns": [
                  {
                    "Header": "39",
                    "accessor": "yard_monument_memorial_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Отмостка",
        "accessor": "отмостка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "40",
            "columns": [
              {
                "Header": "40",
                "accessor": "yard_blind_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "41",
            "columns": [
              {
                "Header": "41",
                "accessor": "yard_blind_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Иные некапитальные объекты",
    "accessor": "иные_некапитальные_объекты",
    "columns": [
      {
        "Header": "Общее количество иных некапитальных объектов",
        "accessor": "общее_количество_иных_некапитальных_объектов",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "42",
            "columns": [
              {
                "Header": "42",
                "accessor": "yard_other_place_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь иных некапитальных объектов",
        "accessor": "общая_площадь_иных_некапитальных_объектов",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "43",
            "columns": [
              {
                "Header": "43",
                "accessor": "yard_other_place_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Нежилое строение",
        "accessor": "нежилое_строение",
        "columns": [
          {
            "Header": "Веранда",
            "accessor": "веранда",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "44",
                "columns": [
                  {
                    "Header": "44",
                    "accessor": "yard_gazebo_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "45",
                "columns": [
                  {
                    "Header": "45",
                    "accessor": "yard_gazebo_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Гараж",
            "accessor": "гараж",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "46",
                "columns": [
                  {
                    "Header": "46",
                    "accessor": "yard_16_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "47",
                "columns": [
                  {
                    "Header": "47",
                    "accessor": "yard_16_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Голубятня",
            "accessor": "голубятня",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "48",
                "columns": [
                  {
                    "Header": "48",
                    "accessor": "yard_dovecote_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "49",
                "columns": [
                  {
                    "Header": "49",
                    "accessor": "yard_dovecote_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Модульный туалет",
            "accessor": "модульный_туалет",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "50",
                "columns": [
                  {
                    "Header": "50",
                    "accessor": "yard_other_place_modular_wc_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "51",
                "columns": [
                  {
                    "Header": "51",
                    "accessor": "yard_other_place_modular_wc_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Нежилое строение",
            "accessor": "нежилое_строение",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "52",
                "columns": [
                  {
                    "Header": "52",
                    "accessor": "yard_other_place_object_nonresidential_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "53",
                "columns": [
                  {
                    "Header": "53",
                    "accessor": "yard_other_place_object_nonresidential_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Объект административно хозяйственного назначения",
            "accessor": "объект_административно_хозяйственного_назначения",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "54",
                "columns": [
                  {
                    "Header": "54",
                    "accessor": "yard_other_place_object_admin_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "55",
                "columns": [
                  {
                    "Header": "55",
                    "accessor": "yard_other_place_object_admin_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Объект технического назначения",
            "accessor": "объект_технического_назначения",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "56",
                "columns": [
                  {
                    "Header": "56",
                    "accessor": "yard_other_place_object_tech_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "57",
                "columns": [
                  {
                    "Header": "57",
                    "accessor": "yard_other_place_object_tech_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Объект торговли",
            "accessor": "объект_торговли",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "58",
                "columns": [
                  {
                    "Header": "58",
                    "accessor": "yard_object_trade_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "59",
                "columns": [
                  {
                    "Header": "59",
                    "accessor": "yard_other_place_object_trade_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Ограждение кирпичное",
            "accessor": "ограждение_кирпичное",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "60",
                "columns": [
                  {
                    "Header": "60",
                    "accessor": "yard_brick_fencing_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "61",
                "columns": [
                  {
                    "Header": "61",
                    "accessor": "yard_brick_fencing_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Сцена уличная",
            "accessor": "сцена_уличная",
            "columns": [
              {
                "Header": "Без навеса",
                "accessor": "без_навеса",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "62",
                    "columns": [
                      {
                        "Header": "62",
                        "accessor": "yard_scene_wo_canopy_num"
                      }
                    ]
                  },
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "63",
                    "columns": [
                      {
                        "Header": "63",
                        "accessor": "yard_scene_wo_canopy_area"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С навесом",
                "accessor": "с_навесом",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "64",
                    "columns": [
                      {
                        "Header": "64",
                        "accessor": "yard_scene_canopy_num"
                      }
                    ]
                  },
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "65",
                    "columns": [
                      {
                        "Header": "65",
                        "accessor": "yard_scene_canopy_area"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "Header": "Производственные некапитальные объекты",
    "accessor": "производственные_некапитальные_объекты",
    "columns": [
      {
        "Header": "Нежилое строение",
        "accessor": "нежилое_строение",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "66",
            "columns": [
              {
                "Header": "66",
                "accessor": "yard_industry_place_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "67",
            "columns": [
              {
                "Header": "67",
                "accessor": "yard_industry_place_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Плоскостные сооружения",
    "accessor": "плоскостные_сооружения",
    "columns": [
      {
        "Header": "Общее количество плоскостных сооружений",
        "accessor": "общее_количество_плоскостных_сооружений",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "68",
            "columns": [
              {
                "Header": "68",
                "accessor": "yard_plane_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь плоскостных сооружений",
        "accessor": "общая_площадь_плоскостных_сооружений",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "69",
            "columns": [
              {
                "Header": "69",
                "accessor": "yard_plane_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Автопарковка",
        "accessor": "автопарковка",
        "columns": [
          {
            "Header": "Открытого типа",
            "accessor": "открытого_типа",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "70",
                "columns": [
                  {
                    "Header": "70",
                    "accessor": "yard_dts_parking_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "71",
                "columns": [
                  {
                    "Header": "71",
                    "accessor": "yard_dts_parking_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Закрытого типа",
            "accessor": "закрытого_типа",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "72",
                "columns": [
                  {
                    "Header": "72",
                    "accessor": "yard_dts_indoors_parking_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "73",
                "columns": [
                  {
                    "Header": "73",
                    "accessor": "yard_dts_indoors_parking_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Велопарковка открытого типа для кратковременного хранения\n            велосипедов",
        "accessor": "велопарковка_открытого_типа_для_кратковременного_хранения_____________велосипедов",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "74",
            "columns": [
              {
                "Header": "74",
                "accessor": "yard_68_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "75",
            "columns": [
              {
                "Header": "75",
                "accessor": "yard_68_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Детская площадка (в том числе тип \"Песочная фабрика\")",
        "accessor": "детская_площадка_(в_том_числе_тип_\"песочная_фабрика\")",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "76",
            "columns": [
              {
                "Header": "76",
                "accessor": "yard_plane_kids_playground_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "77",
            "columns": [
              {
                "Header": "77",
                "accessor": "yard_plane_kids_playground_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Площадка для аварийно-спасательной техники",
        "accessor": "площадка_для_аварийно-спасательной_техники",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "78",
            "columns": [
              {
                "Header": "78",
                "accessor": "yard_67_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "79",
            "columns": [
              {
                "Header": "79",
                "accessor": "yard_67_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Площадка для выгула животных",
        "accessor": "площадка_для_выгула_животных",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "80",
            "columns": [
              {
                "Header": "80",
                "accessor": "yard_plane_pets_playground_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "81",
            "columns": [
              {
                "Header": "81",
                "accessor": "yard_plane_pets_playground_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Площадка для отдыха",
        "accessor": "площадка_для_отдыха",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "82",
            "columns": [
              {
                "Header": "82",
                "accessor": "yard_plane_rest_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "83",
            "columns": [
              {
                "Header": "83",
                "accessor": "yard_plane_rest_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Площадка для экстремальных видов спорта",
        "accessor": "площадка_для_экстремальных_видов_спорта",
        "columns": [
          {
            "Header": "Роллердром",
            "accessor": "роллердром",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "84",
                "columns": [
                  {
                    "Header": "84",
                    "accessor": "yard_extreme_sport_roller_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "85",
                "columns": [
                  {
                    "Header": "85",
                    "accessor": "yard_extreme_sport_roller_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Скейтпарк",
            "accessor": "скейтпарк",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "86",
                "columns": [
                  {
                    "Header": "86",
                    "accessor": "yard_maf_skatepark_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "87",
                "columns": [
                  {
                    "Header": "87",
                    "accessor": "yard_maf_skatepark_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Площадка иного типа",
        "accessor": "площадка_иного_типа",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "88",
            "columns": [
              {
                "Header": "88",
                "accessor": "yard_other_type_site_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "89",
            "columns": [
              {
                "Header": "89",
                "accessor": "yard_other_type_site_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Смотровая площадка",
        "accessor": "смотровая_площадка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "90",
            "columns": [
              {
                "Header": "90",
                "accessor": "yard_viewing_platform_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "91",
            "columns": [
              {
                "Header": "91",
                "accessor": "yard_viewing_platform_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Спортивная площадка",
        "accessor": "спортивная_площадка",
        "columns": [
          {
            "Header": "Воркаут",
            "accessor": "воркаут",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "92",
                "columns": [
                  {
                    "Header": "92",
                    "accessor": "yard_sports_workout_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "93",
                "columns": [
                  {
                    "Header": "93",
                    "accessor": "yard_sports_workout_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Для игровых видов спорта",
            "accessor": "для_игровых_видов_спорта",
            "columns": [
              {
                "Header": "без признака \"Каток открытый с естественным льдом на\n            существующей спортивной площадке спортивного типа\"",
                "accessor": "без_признака_\"каток_открытый_с_естественным_льдом_на_____________существующей_спортивной_площадке_спортивного_типа\"",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "94",
                    "columns": [
                      {
                        "Header": "94",
                        "accessor": "yard_ice_rink_planar_structure_qty"
                      }
                    ]
                  },
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "95",
                    "columns": [
                      {
                        "Header": "95",
                        "accessor": "yard_ice_rink_planar_structure_area"
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "с признаком \"Каток открытый с естественным льдом на\n            существующей спортивной площадке спортивного типа\"",
                "accessor": "с_признаком_\"каток_открытый_с_естественным_льдом_на_____________существующей_спортивной_площадке_спортивного_типа\"",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "96",
                    "columns": [
                      {
                        "Header": "96",
                        "accessor": "yard_no_ice_rink_planar_structure_qty"
                      }
                    ]
                  },
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "97",
                    "columns": [
                      {
                        "Header": "97",
                        "accessor": "yard_no_ice_rink_planar_structure_area"
                      }
                    ]
                  }
                ]
              }
            ],
            "rowSpan": 2
          },
          {
            "Header": "Площадка для игр в городки",
            "accessor": "площадка_для_игр_в_городки",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "98",
                "columns": [
                  {
                    "Header": "98",
                    "accessor": "yard_17_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "99",
                "columns": [
                  {
                    "Header": "99",
                    "accessor": "yard_17_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Площадка для настольного тенниса",
            "accessor": "площадка_для_настольного_тенниса",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "100",
                "columns": [
                  {
                    "Header": "100",
                    "accessor": "yard_18_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "101",
                "columns": [
                  {
                    "Header": "101",
                    "accessor": "yard_18_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Техническая площадка",
        "accessor": "техническая_площадка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "102",
            "columns": [
              {
                "Header": "102",
                "accessor": "yard_technical_site_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "103",
            "columns": [
              {
                "Header": "103",
                "accessor": "yard_technical_site_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Хозяйственная площадка (для сушки белья)",
        "accessor": "хозяйственная_площадка_(для_сушки_белья)",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "104",
            "columns": [
              {
                "Header": "104",
                "accessor": "yard_plane_household_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "105",
            "columns": [
              {
                "Header": "105",
                "accessor": "yard_plane_household_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Экопарковка",
        "accessor": "экопарковка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "106",
            "columns": [
              {
                "Header": "106",
                "accessor": "yard_dts_eco_parking_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "107",
            "columns": [
              {
                "Header": "107",
                "accessor": "yard_dts_eco_parking_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Места накопления отходов",
    "accessor": "места_накопления_отходов",
    "columns": [
      {
        "Header": "Общее количество мест накопления отходов",
        "accessor": "общее_количество_мест_накопления_отходов",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "108",
            "columns": [
              {
                "Header": "108",
                "accessor": "yard_waste_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь мест накопления отходов",
        "accessor": "общая_площадь_мест_накопления_отходов",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "109",
            "columns": [
              {
                "Header": "109",
                "accessor": "yard_waste_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Бункерная площадка (для КГО)",
        "accessor": "бункерная_площадка_(для_кго)",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "110",
            "columns": [
              {
                "Header": "110",
                "accessor": "yard_bunker_area_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "111",
            "columns": [
              {
                "Header": "111",
                "accessor": "yard_bunker_area_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Контейнерная площадка",
        "accessor": "контейнерная_площадка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "112",
            "columns": [
              {
                "Header": "112",
                "accessor": "yard_container_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "113",
            "columns": [
              {
                "Header": "113",
                "accessor": "yard_container_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Площадка для выкатных контейнеров",
        "accessor": "площадка_для_выкатных_контейнеров",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "114",
            "columns": [
              {
                "Header": "114",
                "accessor": "yard_waste_export_point_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Площадка для выкатных контейнеров (для полезных компонентов)",
        "accessor": "площадка_для_выкатных_контейнеров_(для_полезных_компонентов)",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "115",
            "columns": [
              {
                "Header": "115",
                "accessor": "yard_roll_container_useful_components_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Площадка стационарного павильона для РСО",
        "accessor": "площадка_стационарного_павильона_для_рсо",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "116",
            "columns": [
              {
                "Header": "116",
                "accessor": "yard_pavilion_rso_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "117",
            "columns": [
              {
                "Header": "117",
                "accessor": "yard_pavilion_rso_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Закрытые велопарковки для долгосрочного хранения велосипедов",
    "accessor": "закрытые_велопарковки_для_долгосрочного_хранения_велосипедов",
    "columns": [
      {
        "Header": "Количество, шт.",
        "accessor": "118",
        "columns": [
          {
            "Header": "118",
            "accessor": "yard_plane_indoors_bicycle_longtime_parking_num"
          }
        ]
      },
      {
        "Header": "Площадь, кв.м.",
        "accessor": "119",
        "columns": [
          {
            "Header": "119",
            "accessor": "yard_plane_indoors_bicycle_longtime_parking_area"
          }
        ]
      }
    ],
    "rowSpan": 5
  },
  {
    "Header": "Дорожно-тропиночная сеть",
    "accessor": "дорожно-тропиночная_сеть",
    "columns": [
      {
        "Header": "Общее количество дорожно-тропиночной сети",
        "accessor": "общее_количество_дорожно-тропиночной_сети",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "120",
            "columns": [
              {
                "Header": "120",
                "accessor": "yard_dts_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь дорожно-тропиночной сети",
        "accessor": "общая_площадь_дорожно-тропиночной_сети",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "121",
            "columns": [
              {
                "Header": "121",
                "accessor": "yard_dts_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Беговая дорожка",
        "accessor": "беговая_дорожка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "122",
            "columns": [
              {
                "Header": "122",
                "accessor": "yard_track_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "123",
            "columns": [
              {
                "Header": "123",
                "accessor": "yard_track_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Велосипедная дорожка",
        "accessor": "велосипедная_дорожка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "124",
            "columns": [
              {
                "Header": "124",
                "accessor": "yard_dts_bicycle_path_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "125",
            "columns": [
              {
                "Header": "125",
                "accessor": "yard_dts_bicycle_path_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Лестница",
        "accessor": "лестница",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "126",
            "columns": [
              {
                "Header": "126",
                "accessor": "yard_105_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "127",
            "columns": [
              {
                "Header": "127",
                "accessor": "yard_105_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Пандус",
        "accessor": "пандус",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "128",
            "columns": [
              {
                "Header": "128",
                "accessor": "yard_104_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "129",
            "columns": [
              {
                "Header": "129",
                "accessor": "yard_104_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Пешеходная дорожка",
        "accessor": "пешеходная_дорожка",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "130",
            "columns": [
              {
                "Header": "130",
                "accessor": "yard_dts_pedestrian_path_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "131",
            "columns": [
              {
                "Header": "131",
                "accessor": "yard_dts_pedestrian_path_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Проезд",
        "accessor": "проезд",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "132",
            "columns": [
              {
                "Header": "132",
                "accessor": "yard_dts_passage_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "133",
            "columns": [
              {
                "Header": "133",
                "accessor": "yard_dts_passage_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Рельефный пешеходный переход",
        "accessor": "рельефный_пешеходный_переход",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "134",
            "columns": [
              {
                "Header": "134",
                "accessor": "yard_relief_crosswalk_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "135",
            "columns": [
              {
                "Header": "135",
                "accessor": "yard_relief_crosswalk_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Тротуар",
        "accessor": "тротуар",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "136",
            "columns": [
              {
                "Header": "136",
                "accessor": "yard_dts_sidewalk_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "137",
            "columns": [
              {
                "Header": "137",
                "accessor": "yard_dts_sidewalk_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Элементы озеленения",
    "accessor": "элементы_озеленения",
    "columns": [
      {
        "Header": "Общее количество элементов озеленения",
        "accessor": "общее_количество_элементов_озеленения",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "138",
            "columns": [
              {
                "Header": "138",
                "accessor": "yard_total_ozn_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь элементов озеленения (газонов и цветников)",
        "accessor": "общая_площадь_элементов_озеленения_(газонов_и_цветников)",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "139",
            "columns": [
              {
                "Header": "139",
                "accessor": "yard_total_ozn_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая длина элементов озеленения",
        "accessor": "общая_длина_элементов_озеленения",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "140",
            "columns": [
              {
                "Header": "140",
                "accessor": "yard_total_ozn_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Деревья/Кустарники",
        "accessor": "деревья/кустарники",
        "columns": [
          {
            "Header": "Общее количество деревьев/ кустарников",
            "accessor": "общее_количество_деревьев/_кустарников",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "141",
                "columns": [
                  {
                    "Header": "141",
                    "accessor": "yard_trees_brush_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Вьющиеся кустарники (Лиана)",
            "accessor": "вьющиеся_кустарники_(лиана)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "142",
                "columns": [
                  {
                    "Header": "142",
                    "accessor": "yard_vines_qty"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Дерево",
            "accessor": "дерево",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "143",
                "columns": [
                  {
                    "Header": "143",
                    "accessor": "yard_green_trees_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Живая изгородь",
            "accessor": "живая_изгородь",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "144",
                "columns": [
                  {
                    "Header": "144",
                    "accessor": "yard_sum_hedges_area"
                  }
                ]
              },
              {
                "Header": "Длина, п.м.",
                "accessor": "145",
                "columns": [
                  {
                    "Header": "145",
                    "accessor": "yard_sum_hedges_length"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Кустарник",
            "accessor": "кустарник",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "146",
                "columns": [
                  {
                    "Header": "146",
                    "accessor": "yard_green_bushs_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Газон",
        "accessor": "газон",
        "columns": [
          {
            "Header": "Общее количество газонов",
            "accessor": "общее_количество_газонов",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "147",
                "columns": [
                  {
                    "Header": "147",
                    "accessor": "yard_green_lawns_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Общая площадь газонов",
            "accessor": "общая_площадь_газонов",
            "columns": [
              {
                "Header": "Площадь, кв.м.",
                "accessor": "148",
                "columns": [
                  {
                    "Header": "148",
                    "accessor": "yard_green_lawns_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Обыкновенный",
            "accessor": "обыкновенный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "149",
                "columns": [
                  {
                    "Header": "149",
                    "accessor": "yard_ordinary_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "150",
                "columns": [
                  {
                    "Header": "150",
                    "accessor": "yard_green_lawns_plain_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Луговой, разнотравный",
            "accessor": "луговой__разнотравный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "151",
                "columns": [
                  {
                    "Header": "151",
                    "accessor": "yard_meadow_grass_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "152",
                "columns": [
                  {
                    "Header": "152",
                    "accessor": "yard_green_lawns_meadow_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Партерный",
            "accessor": "партерный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "153",
                "columns": [
                  {
                    "Header": "153",
                    "accessor": "yard_ground_floor_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "154",
                "columns": [
                  {
                    "Header": "154",
                    "accessor": "yard_green_lawns_parterre_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "На откосе",
            "accessor": "на_откосе",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "155",
                "columns": [
                  {
                    "Header": "155",
                    "accessor": "yard_on_slope_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "156",
                "columns": [
                  {
                    "Header": "156",
                    "accessor": "yard_green_lawns_slope_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Иного типа",
            "accessor": "иного_типа",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "157",
                "columns": [
                  {
                    "Header": "157",
                    "accessor": "yard_other_type_num"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "158",
                "columns": [
                  {
                    "Header": "158",
                    "accessor": "yard_green_lawns_other_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Цветники",
        "accessor": "цветники",
        "columns": [
          {
            "Header": "Общее количество цветников",
            "accessor": "общее_количество_цветников",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "159",
                "columns": [
                  {
                    "Header": "159",
                    "accessor": "yard_green_flowers_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Общая площадь цветников",
            "accessor": "общая_площадь_цветников",
            "columns": [
              {
                "Header": "Площадь, кв.м.",
                "accessor": "160",
                "columns": [
                  {
                    "Header": "160",
                    "accessor": "yard_green_flowers_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Однолетники",
            "accessor": "однолетники",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "161",
                "columns": [
                  {
                    "Header": "161",
                    "accessor": "yard_green_flowers_annuals_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "162",
                "columns": [
                  {
                    "Header": "162",
                    "accessor": "yard_green_flowers_annuals_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Многолетники и розы",
            "accessor": "многолетники_и_розы",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "163",
                "columns": [
                  {
                    "Header": "163",
                    "accessor": "yard_green_flowers_perennials_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "164",
                "columns": [
                  {
                    "Header": "164",
                    "accessor": "yard_green_flowers_perennials_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Инертный материал (отсыпка)",
            "accessor": "инертный_материал_(отсыпка)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "165",
                "columns": [
                  {
                    "Header": "165",
                    "accessor": "yard_green_flowers_inert_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "166",
                "columns": [
                  {
                    "Header": "166",
                    "accessor": "yard_green_flowers_inert_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Газоны (как элемент цветника)",
            "accessor": "газоны_(как_элемент_цветника)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "167",
                "columns": [
                  {
                    "Header": "167",
                    "accessor": "yard_green_flowers_lawn_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "168",
                "columns": [
                  {
                    "Header": "168",
                    "accessor": "yard_green_flowers_lawn_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Декоративные кустарники (как элемент цветника)",
            "accessor": "декоративные_кустарники_(как_элемент_цветника)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "169",
                "columns": [
                  {
                    "Header": "169",
                    "accessor": "yard_green_flowers_decorative_bush_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "170",
                "columns": [
                  {
                    "Header": "170",
                    "accessor": "yard_green_flowers_decorative_bush_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Рокарий (многолетние, однолетние)",
            "accessor": "рокарий_(многолетние__однолетние)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "171",
                "columns": [
                  {
                    "Header": "171",
                    "accessor": "yard_green_flowers_rockery_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "172",
                "columns": [
                  {
                    "Header": "172",
                    "accessor": "yard_green_flowers_rockery_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Луковичные и клубнелуковичные",
            "accessor": "луковичные_и_клубнелуковичные",
            "columns": [
              {
                "Header": "Кроме тюльпанов, нарциссов",
                "accessor": "кроме_тюльпанов__нарциссов",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "173",
                    "columns": [
                      {
                        "Header": "173",
                        "accessor": "yard_green_flowers_except_tulip_narcis_qty"
                      }
                    ]
                  },
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "174",
                    "columns": [
                      {
                        "Header": "174",
                        "accessor": "yard_green_flowers_except_tulip_narcis_area"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Тюльпаны, нарциссы",
                "accessor": "тюльпаны__нарциссы",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "175",
                    "columns": [
                      {
                        "Header": "175",
                        "accessor": "yard_green_flowers_tulip_narcis_qty"
                      }
                    ]
                  },
                  {
                    "Header": "Площадь, кв.м.",
                    "accessor": "176",
                    "columns": [
                      {
                        "Header": "176",
                        "accessor": "yard_green_flowers_tulip_narcis_area"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Двулетники (виола)",
            "accessor": "двулетники_(виола)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "177",
                "columns": [
                  {
                    "Header": "177",
                    "accessor": "yard_green_flowers_biennials_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "178",
                "columns": [
                  {
                    "Header": "178",
                    "accessor": "yard_green_flowers_biennials_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Декорирование щепой",
            "accessor": "декорирование_щепой",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "179",
                "columns": [
                  {
                    "Header": "179",
                    "accessor": "yard_green_flowers_decor_splint_qty"
                  }
                ]
              },
              {
                "Header": "Площадь, кв.м.",
                "accessor": "180",
                "columns": [
                  {
                    "Header": "180",
                    "accessor": "yard_green_flowers_decor_splint_area"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      }
    ]
  },
  {
    "Header": "Элементы вертикального озеленения",
    "accessor": "элементы_вертикального_озеленения",
    "columns": [
      {
        "Header": "Общее количество элементов вертикального озеленения",
        "accessor": "общее_количество_элементов_вертикального_озеленения",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "181",
            "columns": [
              {
                "Header": "181",
                "accessor": "yard_total_vertical_ozn"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Вазоны",
        "accessor": "вазоны",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "182",
            "columns": [
              {
                "Header": "182",
                "accessor": "yard_evo_flowerpot_ge_fde_qty"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Кадки",
        "accessor": "кадки",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "183",
            "columns": [
              {
                "Header": "183",
                "accessor": "yard_evo_tub_ge_fde_qty"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Вертикальные конструкции",
        "accessor": "вертикальные_конструкции",
        "columns": [
          {
            "Header": "Подвесная",
            "accessor": "подвесная",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "184",
                "columns": [
                  {
                    "Header": "184",
                    "accessor": "yard_evo_vertical_structures_suspended_ge_fde_qty"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Напольная",
            "accessor": "напольная",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "185",
                "columns": [
                  {
                    "Header": "185",
                    "accessor": "yard_evo_vertical_structures_floor_ge_fde_qty"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Иные элементы",
            "accessor": "иные_элементы",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "186",
                "columns": [
                  {
                    "Header": "186",
                    "accessor": "yard_evo_vertical_structures_other_ge_fde_qty"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      }
    ]
  },
  {
    "Header": "Растения Красной книги",
    "accessor": "растения_красной_книги",
    "columns": [
      {
        "Header": "Количество, шт.",
        "accessor": "187",
        "columns": [
          {
            "Header": "187",
            "accessor": "yard_red_book_plant_num"
          }
        ]
      }
    ],
    "rowSpan": 5
  },
  {
    "Header": "Малые архитектурные формы",
    "accessor": "малые_архитектурные_формы",
    "columns": [
      {
        "Header": "Общее количество малых архитектурных форм без учета ограждений,\n            ворот, калиток",
        "accessor": "общее_количество_малых_архитектурных_форм_без_учета_ограждений______________ворот__калиток",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "188",
            "columns": [
              {
                "Header": "188",
                "accessor": "yard_total_maf_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая длина ограждений, ворот, калиток",
        "accessor": "общая_длина_ограждений__ворот__калиток",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "189",
            "columns": [
              {
                "Header": "189",
                "accessor": "yard_total_maf_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Садово-парковые элементы",
        "accessor": "садово-парковые_элементы",
        "columns": [
          {
            "Header": "Беседка",
            "accessor": "беседка",
            "columns": [
              {
                "Header": "Из бетона",
                "accessor": "из_бетона",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "190",
                    "columns": [
                      {
                        "Header": "190",
                        "accessor": "yard_maf_arbor_1lvl_13_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Из дерева",
                "accessor": "из_дерева",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "191",
                    "columns": [
                      {
                        "Header": "191",
                        "accessor": "yard_maf_arbor_1lvl_14_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Из металла",
                "accessor": "из_металла",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "192",
                    "columns": [
                      {
                        "Header": "192",
                        "accessor": "yard_maf_arbor_1lvl_17_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Гамак",
            "accessor": "гамак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "193",
                "columns": [
                  {
                    "Header": "193",
                    "accessor": "yard_maf_hammock_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Навес",
            "accessor": "навес",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "194",
                "columns": [
                  {
                    "Header": "194",
                    "accessor": "yard_maf_canopy_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Ротонда-беседка",
            "accessor": "ротонда-беседка",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "195",
                "columns": [
                  {
                    "Header": "195",
                    "accessor": "yard_maf_rot_arbor_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Садово-парковый диван",
            "accessor": "садово-парковый_диван",
            "columns": [
              {
                "Header": "Диван \"качель\"",
                "accessor": "диван_\"качель\"",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "196",
                    "columns": [
                      {
                        "Header": "196",
                        "accessor": "yard_maf_furn_swingsofa_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Диван \"качель\" с навесом",
                "accessor": "диван_\"качель\"_с_навесом",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "197",
                    "columns": [
                      {
                        "Header": "197",
                        "accessor": "yard_maf_park_sofa_1lvl_sofa_swing_canop_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Диван одноместный",
                "accessor": "диван_одноместный",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "198",
                    "columns": [
                      {
                        "Header": "198",
                        "accessor": "yard_maf_furn_sofa_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Диван со спинкой",
                "accessor": "диван_со_спинкой",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "199",
                    "columns": [
                      {
                        "Header": "199",
                        "accessor": "yard_maf_furn_sofa_dp6_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Диван со спинкой с навес����м",
                "accessor": "диван_со_спинкой_с_навес����м",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "200",
                    "columns": [
                      {
                        "Header": "200",
                        "accessor": "yard_maf_park_sofa_1lvl_sofa_back_canop_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Скамья",
            "accessor": "скамья",
            "columns": [
              {
                "Header": "Без спинки",
                "accessor": "без_спинки",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "201",
                    "columns": [
                      {
                        "Header": "201",
                        "accessor": "yard_maf_bench_noback_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Двойная",
                "accessor": "двойная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "202",
                    "columns": [
                      {
                        "Header": "202",
                        "accessor": "yard_maf_bench_1lvl_double_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Для маломобильных групп населения",
                "accessor": "для_маломобильных_групп_населения",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "203",
                    "columns": [
                      {
                        "Header": "203",
                        "accessor": "yard_maf_bench_1lvl_disab_bench_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Пластиковая",
                "accessor": "пластиковая",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "204",
                    "columns": [
                      {
                        "Header": "204",
                        "accessor": "yard_maf_bench_1lvl_plastic_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Полукруглая",
                "accessor": "полукруглая",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "205",
                    "columns": [
                      {
                        "Header": "205",
                        "accessor": "yard_maf_furn_bench_semiround_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С декоративной фигурой",
                "accessor": "с_декоративной_фигурой",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "206",
                    "columns": [
                      {
                        "Header": "206",
                        "accessor": "yard_maf_bench_1lvl_decor_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Скамья сложной формы",
                "accessor": "скамья_сложной_формы",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "207",
                    "columns": [
                      {
                        "Header": "207",
                        "accessor": "yard_maf_bench_1lvl_cmpx_shape_2lvl_unit_5"
                      }
                    ]
                  },
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "208",
                    "columns": [
                      {
                        "Header": "208",
                        "accessor": "yard_maf_bench_1lvl_cmpx_shape_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Со спинкой",
                "accessor": "со_спинкой",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "209",
                    "columns": [
                      {
                        "Header": "209",
                        "accessor": "yard_maf_furn_bench_schg15_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Фигурная скамья с навесом",
                "accessor": "фигурная_скамья_с_навесом",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "210",
                    "columns": [
                      {
                        "Header": "210",
                        "accessor": "yard_maf_bench_1lvl_shaped_bench_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Стол",
            "accessor": "стол",
            "columns": [
              {
                "Header": "Садово-парковый",
                "accessor": "садово-парковый",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "211",
                    "columns": [
                      {
                        "Header": "211",
                        "accessor": "yard_maf_table_1lvl_27_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Урна",
            "accessor": "урна",
            "columns": [
              {
                "Header": "Бетонная",
                "accessor": "бетонная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "212",
                    "columns": [
                      {
                        "Header": "212",
                        "accessor": "yard_maf_urn_1lvl_concrete_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Деревянная",
                "accessor": "деревянная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "213",
                    "columns": [
                      {
                        "Header": "213",
                        "accessor": "yard_maf_urn_1lvl_wood_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Для собачьих экскрементов",
                "accessor": "для_собачьих_экскрементов",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "214",
                    "columns": [
                      {
                        "Header": "214",
                        "accessor": "yard_maf_urn_1lvl_dog_exr_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Металлическая",
                "accessor": "металлическая",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "215",
                    "columns": [
                      {
                        "Header": "215",
                        "accessor": "yard_maf_urn_1lvl_metal_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Металлическая для раздельного сбора отходов 2-х секционная",
                "accessor": "металлическая_для_раздельного_сбора_отходов_2-х_секционная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "216",
                    "columns": [
                      {
                        "Header": "216",
                        "accessor": "yard_maf_urn_1lvl_metal_2sect_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Металлическая для раздельного сбора отходов 3-х и более секционная",
                "accessor": "металлическая_для_раздельного_сбора_отходов_3-х_и_более_секционная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "217",
                    "columns": [
                      {
                        "Header": "217",
                        "accessor": "yard_maf_urn_1lvl_metal_3sect_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          }
        ]
      },
      {
        "Header": "Элементы детских площадок",
        "accessor": "элементы_детских_площадок",
        "columns": [
          {
            "Header": "Горка",
            "accessor": "горка",
            "columns": [
              {
                "Header": "Двойная",
                "accessor": "двойная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "218",
                    "columns": [
                      {
                        "Header": "218",
                        "accessor": "yard_maf_slide_1lvl_double_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Прямая",
                "accessor": "прямая",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "219",
                    "columns": [
                      {
                        "Header": "219",
                        "accessor": "yard_maf_kids_direct_slides_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С домиком",
                "accessor": "с_домиком",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "220",
                    "columns": [
                      {
                        "Header": "220",
                        "accessor": "yard_maf_kids_lodge_slides_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Спиральная",
                "accessor": "спиральная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "221",
                    "columns": [
                      {
                        "Header": "221",
                        "accessor": "yard_maf_kids_spiral_slides_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Труба винтовая",
                "accessor": "труба_винтовая",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "222",
                    "columns": [
                      {
                        "Header": "222",
                        "accessor": "yard_maf_game_forms_screw_pipe_slide_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Труба прямая",
                "accessor": "труба_прямая",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "223",
                    "columns": [
                      {
                        "Header": "223",
                        "accessor": "yard_maf_kids_pipe_slides_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Игровые элементы",
            "accessor": "игровые_элементы",
            "columns": [
              {
                "Header": "Домик",
                "accessor": "домик",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "224",
                    "columns": [
                      {
                        "Header": "224",
                        "accessor": "yard_maf_game_element_house_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Игровой элемент",
                "accessor": "игровой_элемент",
                "columns": [
                  {
                    "Header": "Из дерева",
                    "accessor": "из_дерева",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "225",
                        "columns": [
                          {
                            "Header": "225",
                            "accessor": "yard_maf_game_elem_1lvl_149_2lvl_10121_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Из металла",
                    "accessor": "из_металла",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "226",
                        "columns": [
                          {
                            "Header": "226",
                            "accessor": "yard_maf_game_elem_1lvl_149_2lvl_10122_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Из пластика",
                    "accessor": "из_пластика",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "227",
                        "columns": [
                          {
                            "Header": "227",
                            "accessor": "yard_maf_game_elem_1lvl_149_2lvl_10123_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "Интерактивная доска",
                "accessor": "интерактивная_доска",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "228",
                    "columns": [
                      {
                        "Header": "228",
                        "accessor": "yard_maf_game_elem_1lvl_145_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Интерактивный игровой элемент",
                "accessor": "интерактивный_игровой_элемент",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "229",
                    "columns": [
                      {
                        "Header": "229",
                        "accessor": "yard_maf_game_elem_1lvl_150_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Металлофон",
                "accessor": "металлофон",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "230",
                    "columns": [
                      {
                        "Header": "230",
                        "accessor": "yard_maf_game_elem_1lvl_147_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Паутинка",
                "accessor": "паутинка",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "231",
                    "columns": [
                      {
                        "Header": "231",
                        "accessor": "yard_maf_game_forms_cobweb_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Стенка для рисования",
                "accessor": "стенка_для_рисования",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "232",
                    "columns": [
                      {
                        "Header": "232",
                        "accessor": "yard_maf_drawingwall_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Транспорт",
                "accessor": "транспорт",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "233",
                    "columns": [
                      {
                        "Header": "233",
                        "accessor": "yard_maf_game_elem_1lvl_142_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Фигура животного",
                "accessor": "фигура_животного",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "234",
                    "columns": [
                      {
                        "Header": "234",
                        "accessor": "yard_maf_game_elem_1lvl_148_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Элементы для Песочной фабрики",
                "accessor": "элементы_для_песочной_фабрики",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "235",
                    "columns": [
                      {
                        "Header": "235",
                        "accessor": "yard_maf_game_elem_1lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Карусель",
            "accessor": "карусель",
            "columns": [
              {
                "Header": "Без сидений",
                "accessor": "без_сидений",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "236",
                    "columns": [
                      {
                        "Header": "236",
                        "accessor": "yard_maf_kids_nosits_carousels_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Гнездо",
                "accessor": "гнездо",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "237",
                    "columns": [
                      {
                        "Header": "237",
                        "accessor": "yard_maf_carousel_1lvl_156_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Канатная карусель",
                "accessor": "канатная_карусель",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "238",
                    "columns": [
                      {
                        "Header": "238",
                        "accessor": "yard_maf_carousel_1lvl_157_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С деревянными сиденьями",
                "accessor": "с_деревянными_сиденьями",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "239",
                    "columns": [
                      {
                        "Header": "239",
                        "accessor": "yard_maf_kids_woodsits_carousels_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С пластиковыми сиденьями",
                "accessor": "с_пластиковыми_сиденьями",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "240",
                    "columns": [
                      {
                        "Header": "240",
                        "accessor": "yard_maf_carousel_1lvl_41_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С сиденьями из металла (с резиновым покрытием)",
                "accessor": "с_сиденьями_из_металла_(с_резиновым_покрытием)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "241",
                    "columns": [
                      {
                        "Header": "241",
                        "accessor": "yard_maf_kids_steelsits_carousels_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Качалка",
            "accessor": "качалка",
            "columns": [
              {
                "Header": "Балансир",
                "accessor": "балансир",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "242",
                    "columns": [
                      {
                        "Header": "242",
                        "accessor": "yard_maf_kids_rocker_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Балансир на пружине",
                "accessor": "балансир_на_пружине",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "243",
                    "columns": [
                      {
                        "Header": "243",
                        "accessor": "yard_maf_rocking_chair_1lvl_155_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Гнездо на пружине",
                "accessor": "гнездо_на_пружине",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "244",
                    "columns": [
                      {
                        "Header": "244",
                        "accessor": "yard_maf_rocking_chair_1lvl_154_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "На пружине",
                "accessor": "на_пружине",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "245",
                    "columns": [
                      {
                        "Header": "245",
                        "accessor": "yard_maf_kids_spring_rocker_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Переносная",
                "accessor": "переносная",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "246",
                    "columns": [
                      {
                        "Header": "246",
                        "accessor": "yard_maf_kids_portable_rocker_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Качели",
            "accessor": "качели",
            "columns": [
              {
                "Header": "Гнездо с гибким подвесом",
                "accessor": "гнездо_с_гибким_подвесом",
                "columns": [
                  {
                    "Header": "Стойки из дерева",
                    "accessor": "стойки_из_дерева",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "247",
                        "columns": [
                          {
                            "Header": "247",
                            "accessor": "yard_maf_swing_1lvl_153_2lvl_10119_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Стойки из металла",
                    "accessor": "стойки_из_металла",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "248",
                        "columns": [
                          {
                            "Header": "248",
                            "accessor": "yard_maf_swing_1lvl_153_2lvl_10120_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "Качели с гибким подвесом",
                "accessor": "качели_с_гибким_подвесом",
                "columns": [
                  {
                    "Header": "Стойки из дерева",
                    "accessor": "стойки_из_дерева",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "249",
                        "columns": [
                          {
                            "Header": "249",
                            "accessor": "yard_maf_swing_1lvl_152_2lvl_10119_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Стойки из металла",
                    "accessor": "стойки_из_металла",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "250",
                        "columns": [
                          {
                            "Header": "250",
                            "accessor": "yard_maf_swing_1lvl_152_2lvl_10120_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "Header": "Песочница",
            "accessor": "песочница",
            "columns": [
              {
                "Header": "Без навеса",
                "accessor": "без_навеса",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "251",
                    "columns": [
                      {
                        "Header": "251",
                        "accessor": "yard_maf_kids_sandbox18_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Песочный дворик",
                "accessor": "песочный_дворик",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "252",
                    "columns": [
                      {
                        "Header": "252",
                        "accessor": "yard_maf_kids_sandyyard_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С крышкой",
                "accessor": "с_крышкой",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "253",
                    "columns": [
                      {
                        "Header": "253",
                        "accessor": "yard_maf_sandbox_1lvl_135_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С навесом",
                "accessor": "с_навесом",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "254",
                    "columns": [
                      {
                        "Header": "254",
                        "accessor": "yard_maf_mushroom_canopy_sandbox_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "С фигурой",
                "accessor": "с_фигурой",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "255",
                    "columns": [
                      {
                        "Header": "255",
                        "accessor": "yard_maf_kids_boat_sandbox_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Тарзанка",
            "accessor": "тарзанка",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "256",
                "columns": [
                  {
                    "Header": "256",
                    "accessor": "yard_maf_tarzan_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Элементы спортивных площадок",
        "accessor": "элементы_спортивных_площадок",
        "columns": [
          {
            "Header": "Скейтпарк",
            "accessor": "скейтпарк",
            "columns": [
              {
                "Header": "Радиусная пирамида",
                "accessor": "радиусная_пирамида",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "257",
                    "columns": [
                      {
                        "Header": "257",
                        "accessor": "yard_maf_skatepark_radius_pyramid_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Разгонка",
                "accessor": "разгонка",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "258",
                    "columns": [
                      {
                        "Header": "258",
                        "accessor": "yard_maf_skatepark_accelerating_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Рампа",
                "accessor": "рампа",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "259",
                    "columns": [
                      {
                        "Header": "259",
                        "accessor": "yard_maf_skatepark_1lvl_133_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Слайд-элементы",
                "accessor": "слайд-элементы",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "260",
                    "columns": [
                      {
                        "Header": "260",
                        "accessor": "yard_maf_skatepark_1lvl_134_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Фанбокс",
                "accessor": "фанбокс",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "261",
                    "columns": [
                      {
                        "Header": "261",
                        "accessor": "yard_maf_skatepark_fanbox_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Спортивные элементы",
            "accessor": "спортивные_элементы",
            "columns": [
              {
                "Header": "Баскетбольная стойка с корзиной",
                "accessor": "баскетбольная_стойка_с_корзиной",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "262",
                    "columns": [
                      {
                        "Header": "262",
                        "accessor": "yard_maf_sports_basktower_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Баскетбольный щит с корзиной",
                "accessor": "баскетбольный_щит_с_корзиной",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "263",
                    "columns": [
                      {
                        "Header": "263",
                        "accessor": "yard_maf_sport_elements2_1lvl_129_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Батут",
                "accessor": "батут",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "264",
                    "columns": [
                      {
                        "Header": "264",
                        "accessor": "yard_maf_sport_elements2_1lvl_118_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Бревно",
                "accessor": "бревно",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "265",
                    "columns": [
                      {
                        "Header": "265",
                        "accessor": "yard_maf_sports_brevno_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Брусья гимнастические",
                "accessor": "брусья_гимнастические",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "266",
                    "columns": [
                      {
                        "Header": "266",
                        "accessor": "yard_maf_sports_parallel_bar_gym_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Бум",
                "accessor": "бум",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "267",
                    "columns": [
                      {
                        "Header": "267",
                        "accessor": "yard_maf_sports_bum_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Волейбольная/теннисная стойка",
                "accessor": "волейбольная/теннисная_стойка",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "268",
                    "columns": [
                      {
                        "Header": "268",
                        "accessor": "yard_maf_sports_volstoyka_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ворота гандбольные",
                "accessor": "ворота_гандбольные",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "269",
                    "columns": [
                      {
                        "Header": "269",
                        "accessor": "yard_maf_sports_handball_gate_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ворота для мини футбола с баскетбольным кольцом",
                "accessor": "ворота_для_мини_футбола_с_баскетбольным_кольцом",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "270",
                    "columns": [
                      {
                        "Header": "270",
                        "accessor": "yard_maf_sport_elements2_1lvl_117_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ворота футбольные",
                "accessor": "ворота_футбольные",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "271",
                    "columns": [
                      {
                        "Header": "271",
                        "accessor": "yard_maf_sports_football_gate_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ворота хоккейные",
                "accessor": "ворота_хоккейные",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "272",
                    "columns": [
                      {
                        "Header": "272",
                        "accessor": "yard_maf_sports_hockey_gate_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Вышка судейская",
                "accessor": "вышка_судейская",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "273",
                    "columns": [
                      {
                        "Header": "273",
                        "accessor": "yard_maf_sport_elements2_1lvl_132_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Искусственные препятствия",
                "accessor": "искусственные_препятствия",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "274",
                    "columns": [
                      {
                        "Header": "274",
                        "accessor": "yard_maf_sports_artificial_barrier_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Кольца",
                "accessor": "кольца",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "275",
                    "columns": [
                      {
                        "Header": "275",
                        "accessor": "yard_maf_sports_rings_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ногоход (подвесной мостик)",
                "accessor": "ногоход_(подвесной_мостик)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "276",
                    "columns": [
                      {
                        "Header": "276",
                        "accessor": "yard_maf_sports_nogohod_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Рукоход",
                "accessor": "рукоход",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "277",
                    "columns": [
                      {
                        "Header": "277",
                        "accessor": "yard_maf_sports_rukohod_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Скамья для пресса",
                "accessor": "скамья_для_пресса",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "278",
                    "columns": [
                      {
                        "Header": "278",
                        "accessor": "yard_maf_sport_elements2_1lvl_press_bench_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Спортивный тренажер",
                "accessor": "спортивный_тренажер",
                "columns": [
                  {
                    "Header": "Без подвижных элементов",
                    "accessor": "без_подвижных_элементов",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "279",
                        "columns": [
                          {
                            "Header": "279",
                            "accessor": "yard_maf_sports_fixed_simulator_num"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "С подвижными элементами",
                    "accessor": "с_подвижными_элементами",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "280",
                        "columns": [
                          {
                            "Header": "280",
                            "accessor": "yard_maf_sports_simulator_num"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "Стенка \"скалолаз\"",
                "accessor": "стенка_\"скалолаз\"",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "281",
                    "columns": [
                      {
                        "Header": "281",
                        "accessor": "yard_maf_sports_climber_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Стол для игры в настольный теннис",
                "accessor": "стол_для_игры_в_настольный_теннис",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "282",
                    "columns": [
                      {
                        "Header": "282",
                        "accessor": "yard_maf_sports_tennis_tbl_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Стол для игры в шахматы",
                "accessor": "стол_для_игры_в_шахматы",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "283",
                    "columns": [
                      {
                        "Header": "283",
                        "accessor": "yard_maf_sport_elements2_1lvl_127_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Стол для тэкбола",
                "accessor": "стол_для_тэкбола",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "284",
                    "columns": [
                      {
                        "Header": "284",
                        "accessor": "yard_maf_sport_elements2_1lvl_128_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Тренажер для маломобильных групп населения",
                "accessor": "тренажер_для_маломобильных_групп_населения",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "285",
                    "columns": [
                      {
                        "Header": "285",
                        "accessor": "yard_maf_sports_nomobile_trainer"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Трибуны",
                "accessor": "трибуны",
                "columns": [
                  {
                    "Header": "С деревянными сиденьями",
                    "accessor": "с_деревянными_сиденьями",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "286",
                        "columns": [
                          {
                            "Header": "286",
                            "accessor": "yard_maf_sports_woodsits_tribune_num"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "С пластиковыми сиденьями",
                    "accessor": "с_пластиковыми_сиденьями",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "287",
                        "columns": [
                          {
                            "Header": "287",
                            "accessor": "yard_maf_sports_plasticsits_tribune_num"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "Турник",
                "accessor": "турник",
                "columns": [
                  {
                    "Header": "Стойки из дерева",
                    "accessor": "стойки_из_дерева",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "288",
                        "columns": [
                          {
                            "Header": "288",
                            "accessor": "yard_maf_sports_wood_bar_num"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Стойки из металла",
                    "accessor": "стойки_из_металла",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "289",
                        "columns": [
                          {
                            "Header": "289",
                            "accessor": "yard_maf_sports_metal_bar_num"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "Турник-лесенка",
                "accessor": "турник-лесенка",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "290",
                    "columns": [
                      {
                        "Header": "290",
                        "accessor": "yard_maf_sports_barladder_num"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Шведская стенка",
                "accessor": "шведская_стенка",
                "columns": [
                  {
                    "Header": "До 2,2 м",
                    "accessor": "до_2_2_м",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "291",
                        "columns": [
                          {
                            "Header": "291",
                            "accessor": "yard_maf_sport_elements2_1lvl_121_2lvl_112_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Выше 2,2 м",
                    "accessor": "выше_2_2_м",
                    "columns": [
                      {
                        "Header": "Количество, шт.",
                        "accessor": "292",
                        "columns": [
                          {
                            "Header": "292",
                            "accessor": "yard_maf_sport_elements2_1lvl_121_2lvl_113_3lvl_unit_5"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "Header": "Комплексы",
        "accessor": "комплексы",
        "columns": [
          {
            "Header": "Детский игровой комплекс",
            "accessor": "детский_игровой_комплекс",
            "columns": [
              {
                "Header": "1 категория (Менее 15 кв.м)",
                "accessor": "1_категория_(менее_15_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "293",
                    "columns": [
                      {
                        "Header": "293",
                        "accessor": "yard_maf_chld_cmplx_1lvl_136_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "2 категория (15-30 кв.м)",
                "accessor": "2_категория_(15-30_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "294",
                    "columns": [
                      {
                        "Header": "294",
                        "accessor": "yard_maf_chld_cmplx_1lvl_137_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "3 категория (30-50 кв.м)",
                "accessor": "3_категория_(30-50_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "295",
                    "columns": [
                      {
                        "Header": "295",
                        "accessor": "yard_maf_chld_cmplx_1lvl_138_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "4 категория (50-75 кв.м)",
                "accessor": "4_категория_(50-75_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "296",
                    "columns": [
                      {
                        "Header": "296",
                        "accessor": "yard_maf_chld_cmplx_1lvl_139_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "5 категория (Более 75 кв.м)",
                "accessor": "5_категория_(более_75_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "297",
                    "columns": [
                      {
                        "Header": "297",
                        "accessor": "yard_maf_chld_cmplx_1lvl_140_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Детский канатный игровой комплекс",
            "accessor": "детский_канатный_игровой_комплекс",
            "columns": [
              {
                "Header": "1 категория (Менее 15 кв.м)",
                "accessor": "1_категория_(менее_15_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "298",
                    "columns": [
                      {
                        "Header": "298",
                        "accessor": "yard_maf_child_rope_cmplx_1lvl_136_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "2 категория (15-30 кв.м)",
                "accessor": "2_категория_(15-30_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "299",
                    "columns": [
                      {
                        "Header": "299",
                        "accessor": "yard_maf_child_rope_cmplx_1lvl_137_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "3 категория (Более 30 кв.м)",
                "accessor": "3_категория_(более_30_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "300",
                    "columns": [
                      {
                        "Header": "300",
                        "accessor": "yard_maf_child_rope_cmplx_1lvl_141_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Детский спортивный комплекс",
            "accessor": "детский_спортивный_комплекс",
            "columns": [
              {
                "Header": "1 категория (Менее 15 кв.м)",
                "accessor": "1_категория_(менее_15_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "301",
                    "columns": [
                      {
                        "Header": "301",
                        "accessor": "yard_maf_child_sport_cmplx_1lvl_136_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "2 категория (15-30 кв.м)",
                "accessor": "2_категория_(15-30_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "302",
                    "columns": [
                      {
                        "Header": "302",
                        "accessor": "yard_maf_child_sport_cmplx_1lvl_137_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "3 категория (Более 30 кв.м)",
                "accessor": "3_категория_(более_30_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "303",
                    "columns": [
                      {
                        "Header": "303",
                        "accessor": "yard_maf_child_sport_cmplx_1lvl_141_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Комплекс для детей с ограниченными возможностями",
            "accessor": "комплекс_для_детей_с_ограниченными_возможностями",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "304",
                "columns": [
                  {
                    "Header": "304",
                    "accessor": "yard_maf_disab_cmplx_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Спортивный комплекс (воркаут)",
            "accessor": "спортивный_комплекс_(воркаут)",
            "columns": [
              {
                "Header": "1 категория (Менее 15 кв.м)",
                "accessor": "1_категория_(менее_15_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "305",
                    "columns": [
                      {
                        "Header": "305",
                        "accessor": "yard_maf_workout_1lvl_136_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "2 категория (15-30 кв.м)",
                "accessor": "2_категория_(15-30_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "306",
                    "columns": [
                      {
                        "Header": "306",
                        "accessor": "yard_maf_workout_1lvl_137_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "3 категория (Более 30 кв.м)",
                "accessor": "3_категория_(более_30_кв_м)",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "307",
                    "columns": [
                      {
                        "Header": "307",
                        "accessor": "yard_maf_workout_1lvl_141_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Тренажерный комплекс",
            "accessor": "тренажерный_комплекс",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "308",
                "columns": [
                  {
                    "Header": "308",
                    "accessor": "yard_maf_gym_cmplx_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Ограждение, ворота, калитка",
        "accessor": "ограждение__ворота__калитка",
        "columns": [
          {
            "Header": "Ворота",
            "accessor": "ворота",
            "columns": [
              {
                "Header": "Длина, п.м.",
                "accessor": "309",
                "columns": [
                  {
                    "Header": "309",
                    "accessor": "yard_maf_gates_1lvl_unit_3"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Калитка",
            "accessor": "калитка",
            "columns": [
              {
                "Header": "Длина, п.м.",
                "accessor": "310",
                "columns": [
                  {
                    "Header": "310",
                    "accessor": "yard_maf_door_1lvl_unit_3"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Ограждение",
            "accessor": "ограждение",
            "columns": [
              {
                "Header": "Балюстрада",
                "accessor": "балюстрада",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "311",
                    "columns": [
                      {
                        "Header": "311",
                        "accessor": "yard_maf_fencing_1lvl_108_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Борта спортивных площадок из металла",
                "accessor": "борта_спортивных_площадок_из_металла",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "312",
                    "columns": [
                      {
                        "Header": "312",
                        "accessor": "yard_maf_fencing_1lvl_wall_fenc_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ограждение 3D",
                "accessor": "ограждение_3d",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "313",
                    "columns": [
                      {
                        "Header": "313",
                        "accessor": "yard_maf_fencing_1lvl_fenc_3d_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ограждение бетонное",
                "accessor": "ограждение_бетонное",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "314",
                    "columns": [
                      {
                        "Header": "314",
                        "accessor": "yard_maf_fencing_1lvl_concr_fenc_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ограждение из металлического профильного листа",
                "accessor": "ограждение_из_металлического_профильного_листа",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "315",
                    "columns": [
                      {
                        "Header": "315",
                        "accessor": "yard_maf_fencing_1lvl_metal_fenc_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ограждение из профильной трубы",
                "accessor": "ограждение_из_профильной_трубы",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "316",
                    "columns": [
                      {
                        "Header": "316",
                        "accessor": "yard_maf_fencing_1lvl_rope_fenc_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Ограждение простого рисунка",
                "accessor": "ограждение_простого_рисунка",
                "columns": [
                  {
                    "Header": "До 1,2 м",
                    "accessor": "до_1_2_м",
                    "columns": [
                      {
                        "Header": "Длина, п.м.",
                        "accessor": "317",
                        "columns": [
                          {
                            "Header": "317",
                            "accessor": "yard_maf_fencing_1lvl_simple_pctr_2lvl_108_3lvl_unit_3"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Выше 1,2 м",
                    "accessor": "выше_1_2_м",
                    "columns": [
                      {
                        "Header": "Длина, п.м.",
                        "accessor": "318",
                        "columns": [
                          {
                            "Header": "318",
                            "accessor": "yard_maf_fencing_1lvl_simple_pctr_2lvl_109_3lvl_unit_3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "Ограждение художественного литья из чугуна",
                "accessor": "ограждение_художественного_литья_из_чугуна",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "319",
                    "columns": [
                      {
                        "Header": "319",
                        "accessor": "yard_maf_fencing_1lvl_107_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Сетка",
                "accessor": "сетка",
                "columns": [
                  {
                    "Header": "Искусственное волокно",
                    "accessor": "искусственное_волокно",
                    "columns": [
                      {
                        "Header": "Длина, п.м.",
                        "accessor": "320",
                        "columns": [
                          {
                            "Header": "320",
                            "accessor": "yard_maf_fencing_1lvl_net_fenc_2lvl_111_3lvl_unit_3"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "Header": "Металлическая (рабица)",
                    "accessor": "металлическая_(рабица)",
                    "columns": [
                      {
                        "Header": "Длина, п.м.",
                        "accessor": "321",
                        "columns": [
                          {
                            "Header": "321",
                            "accessor": "yard_maf_fencing_1lvl_net_fenc_2lvl_110_3lvl_unit_3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "Header": "Стеклопластиковые панели хоккейной коробки",
                "accessor": "стеклопластиковые_панели_хоккейной_коробки",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "322",
                    "columns": [
                      {
                        "Header": "322",
                        "accessor": "yard_maf_fencing_1lvl_hock_fenc_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Цепное ограждение",
                "accessor": "цепное_ограждение",
                "columns": [
                  {
                    "Header": "Длина, п.м.",
                    "accessor": "323",
                    "columns": [
                      {
                        "Header": "323",
                        "accessor": "yard_maf_fencing_1lvl_chain_fenc_2lvl_unit_3"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          }
        ]
      },
      {
        "Header": "Элементы площадки для выгула собак",
        "accessor": "элементы_площадки_для_выгула_собак",
        "columns": [
          {
            "Header": "Балансир для собак",
            "accessor": "балансир_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "324",
                "columns": [
                  {
                    "Header": "324",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_3_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Барьер для собак",
            "accessor": "барьер_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "325",
                "columns": [
                  {
                    "Header": "325",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_4_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Вышка для собак",
            "accessor": "вышка_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "326",
                "columns": [
                  {
                    "Header": "326",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_168_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Горка для собак",
            "accessor": "горка_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "327",
                "columns": [
                  {
                    "Header": "327",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Змейка для собак",
            "accessor": "змейка_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "328",
                "columns": [
                  {
                    "Header": "328",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_164_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Лабиринт для собак",
            "accessor": "лабиринт_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "329",
                "columns": [
                  {
                    "Header": "329",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_170_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Лесенка для собак",
            "accessor": "лесенка_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "330",
                "columns": [
                  {
                    "Header": "330",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_dog_ladder_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Парковка для собак",
            "accessor": "парковка_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "331",
                "columns": [
                  {
                    "Header": "331",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_172_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Подвеска для прыжков (покрышка) для собак",
            "accessor": "подвеска_для_прыжков_(покрышка)_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "332",
                "columns": [
                  {
                    "Header": "332",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_31_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Подиум на собачьей площадке",
            "accessor": "подиум_на_собачьей_площадке",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "333",
                "columns": [
                  {
                    "Header": "333",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_169_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Снаряд \"кольцо\" для собак",
            "accessor": "снаряд_\"кольцо\"_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "334",
                "columns": [
                  {
                    "Header": "334",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_166_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Снаряд \"тоннель\" для собак",
            "accessor": "снаряд_\"тоннель\"_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "335",
                "columns": [
                  {
                    "Header": "335",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_165_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Трамплин для собак",
            "accessor": "трамплин_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "336",
                "columns": [
                  {
                    "Header": "336",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_167_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Трап для собак",
            "accessor": "трап_для_собак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "337",
                "columns": [
                  {
                    "Header": "337",
                    "accessor": "yard_maf_muf_for_dogs_1lvl_51_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Емкости и павильоны для сбора твердых коммунальных отходов",
        "accessor": "емкости_и_павильоны_для_сбора_твердых_коммунальных_отходов",
        "columns": [
          {
            "Header": "Бункер-накопитель",
            "accessor": "бункер-накопитель",
            "columns": [
              {
                "Header": "Бункер 8 куб.м.",
                "accessor": "бункер_8_куб_м_",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "338",
                    "columns": [
                      {
                        "Header": "338",
                        "accessor": "yard_maf_waste_tanks_1lvl_174_2lvl_127_3lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Бункер 27 куб.м.",
                "accessor": "бункер_27_куб_м_",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "339",
                    "columns": [
                      {
                        "Header": "339",
                        "accessor": "yard_maf_waste_tanks_1lvl_174_2lvl_128_3lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Контейнер для раздельного сбора отходов (РСО)",
            "accessor": "контейнер_для_раздельного_сбора_отходов_(рсо)",
            "columns": [
              {
                "Header": "Контейнер 0,66",
                "accessor": "контейнер_0_66",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "340",
                    "columns": [
                      {
                        "Header": "340",
                        "accessor": "yard_maf_waste_tanks_1lvl_173_2lvl_126_3lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Контейнер 0,8",
                "accessor": "контейнер_0_8",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "341",
                    "columns": [
                      {
                        "Header": "341",
                        "accessor": "yard_maf_waste_tanks_1lvl_173_2lvl_125_3lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Контейнер 1,1",
                "accessor": "контейнер_1_1",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "342",
                    "columns": [
                      {
                        "Header": "342",
                        "accessor": "yard_maf_waste_tanks_1lvl_173_2lvl_124_3lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Контейнер для РСО типа «Колокол»",
            "accessor": "контейнер_для_рсо_типа_«колокол»",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "343",
                "columns": [
                  {
                    "Header": "343",
                    "accessor": "yard_maf_waste_tanks_1lvl_175_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Контейнер-сетка для РСО",
            "accessor": "контейнер-сетка_для_рсо",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "344",
                "columns": [
                  {
                    "Header": "344",
                    "accessor": "yard_maf_waste_tanks_1lvl_176_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Павильон на контейнерной площадке",
            "accessor": "павильон_на_контейнерной_площадке",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "345",
                "columns": [
                  {
                    "Header": "345",
                    "accessor": "yard_maf_waste_tanks_1lvl_177_2lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Дополнительные элементы",
        "accessor": "дополнительные_элементы",
        "columns": [
          {
            "Header": "Арка декоративная",
            "accessor": "арка_декоративная",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "346",
                "columns": [
                  {
                    "Header": "346",
                    "accessor": "yard_maf_dec_arch_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Геопластика малых форм",
            "accessor": "геопластика_малых_форм",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "347",
                "columns": [
                  {
                    "Header": "347",
                    "accessor": "yard_maf_geoplast_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Информационный стенд",
            "accessor": "информационный_стенд",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "348",
                "columns": [
                  {
                    "Header": "348",
                    "accessor": "yard_maf_other_stand_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Кормушка для птиц и зверей",
            "accessor": "кормушка_для_птиц_и_зверей",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "349",
                "columns": [
                  {
                    "Header": "349",
                    "accessor": "yard_maf_bird_feeder_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "МАФ арт-объект",
            "accessor": "маф_арт-объект",
            "columns": [
              {
                "Header": "Из бетона",
                "accessor": "из_бетона",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "350",
                    "columns": [
                      {
                        "Header": "350",
                        "accessor": "yard_maf_190_1lvl_13_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Из дерева",
                "accessor": "из_дерева",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "351",
                    "columns": [
                      {
                        "Header": "351",
                        "accessor": "yard_maf_190_1lvl_14_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Из камня",
                "accessor": "из_камня",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "352",
                    "columns": [
                      {
                        "Header": "352",
                        "accessor": "yard_maf_190_1lvl_116_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Из металла",
                "accessor": "из_металла",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "353",
                    "columns": [
                      {
                        "Header": "353",
                        "accessor": "yard_maf_190_1lvl_17_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              },
              {
                "Header": "Из пластика",
                "accessor": "из_пластика",
                "columns": [
                  {
                    "Header": "Количество, шт.",
                    "accessor": "354",
                    "columns": [
                      {
                        "Header": "354",
                        "accessor": "yard_maf_190_1lvl_18_2lvl_unit_5"
                      }
                    ]
                  }
                ],
                "rowSpan": 2
              }
            ]
          },
          {
            "Header": "Мостик декоративный",
            "accessor": "мостик_декоративный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "355",
                "columns": [
                  {
                    "Header": "355",
                    "accessor": "yard_maf_other_decor_bridge_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Опора для сушки белья",
            "accessor": "опора_для_сушки_белья",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "356",
                "columns": [
                  {
                    "Header": "356",
                    "accessor": "yard_maf_other_pillar_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Пергола",
            "accessor": "пергола",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "357",
                "columns": [
                  {
                    "Header": "357",
                    "accessor": "yard_maf_154_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Приствольная решетка",
            "accessor": "приствольная_решетка",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "358",
                "columns": [
                  {
                    "Header": "358",
                    "accessor": "yard_maf_trunk_grille_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Скульптура",
            "accessor": "скульптура",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "359",
                "columns": [
                  {
                    "Header": "359",
                    "accessor": "yard_maf_sculpture_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Стела",
            "accessor": "стела",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "360",
                "columns": [
                  {
                    "Header": "360",
                    "accessor": "yard_maf_stella_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Стойка для велопарковки",
            "accessor": "стойка_для_велопарковки",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "361",
                "columns": [
                  {
                    "Header": "361",
                    "accessor": "yard_maf_other_equip_bicyclepark_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Табличка информационная",
            "accessor": "табличка_информационная",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "362",
                "columns": [
                  {
                    "Header": "362",
                    "accessor": "yard_maf_information_plate_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Топиарная фигура",
            "accessor": "топиарная_фигура",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "363",
                "columns": [
                  {
                    "Header": "363",
                    "accessor": "yard_maf_topiary_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Трельяж",
            "accessor": "трельяж",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "364",
                "columns": [
                  {
                    "Header": "364",
                    "accessor": "yard_maf_trellis_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Флагшток",
            "accessor": "флагшток",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "365",
                "columns": [
                  {
                    "Header": "365",
                    "accessor": "yard_maf_flagpole_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Шпалера",
            "accessor": "шпалера",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "366",
                "columns": [
                  {
                    "Header": "366",
                    "accessor": "yard_maf_167_1lvl_unit_5"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      }
    ]
  },
  {
    "Header": "Элементы благоустройства для маломобильных групп населения",
    "accessor": "элементы_благоустройства_для_маломобильных_групп_населения",
    "columns": [
      {
        "Header": "Общее количество элементов благоустройства для маломобильных групп\n            населения",
        "accessor": "общее_количество_элементов_благоустройства_для_маломобильных_групп_____________населения",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "367",
            "columns": [
              {
                "Header": "367",
                "accessor": "yard_ppi_total_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая длина элементов благоустройства для маломобильных групп\n            населения",
        "accessor": "общая_длина_элементов_благоустройства_для_маломобильных_групп_____________населения",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "368",
            "columns": [
              {
                "Header": "368",
                "accessor": "yard_ppi_total_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Перила (поручни)",
        "accessor": "перила_(поручни)",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "369",
            "columns": [
              {
                "Header": "369",
                "accessor": "yard_nomobile_elements_handrails_num"
              }
            ]
          },
          {
            "Header": "Длина, п.м.",
            "accessor": "370",
            "columns": [
              {
                "Header": "370",
                "accessor": "yard_nomobile_elements_handrails_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Съезд с тротуара на проезжую часть с понижением высоты бортового\n            камня",
        "accessor": "съезд_с_тротуара_на_проезжую_часть_с_понижением_высоты_бортового_____________камня",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "371",
            "columns": [
              {
                "Header": "371",
                "accessor": "yard_nomobile_elements_moveouts_num"
              }
            ]
          },
          {
            "Header": "Длина, п.м.",
            "accessor": "372",
            "columns": [
              {
                "Header": "372",
                "accessor": "yard_nomobile_elements_moveouts_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Элементы организации рельефа",
    "accessor": "элементы_организации_рельефа",
    "columns": [
      {
        "Header": "Общее количество элементов организации рельефа",
        "accessor": "общее_количество_элементов_организации_рельефа",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "373",
            "columns": [
              {
                "Header": "373",
                "accessor": "yard_terrain_elements_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь элементов организации рельефа",
        "accessor": "общая_площадь_элементов_организации_рельефа",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "374",
            "columns": [
              {
                "Header": "374",
                "accessor": "yard_terrain_elements_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Габион",
        "accessor": "габион",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "375",
            "columns": [
              {
                "Header": "375",
                "accessor": "yard_terrain_elements_gabion_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "376",
            "columns": [
              {
                "Header": "376",
                "accessor": "yard_terrain_elements_gabion_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Подпорные стены",
        "accessor": "подпорные_стены",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "377",
            "columns": [
              {
                "Header": "377",
                "accessor": "yard_terrain_elements_walls_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "378",
            "columns": [
              {
                "Header": "378",
                "accessor": "yard_terrain_elements_walls_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Системы укрепления откосов",
        "accessor": "системы_укрепления_откосов",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "379",
            "columns": [
              {
                "Header": "379",
                "accessor": "yard_terrain_elements_slope_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "380",
            "columns": [
              {
                "Header": "380",
                "accessor": "yard_terrain_elements_slope_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Системы функционального обеспечения",
    "accessor": "системы_функционального_обеспечения",
    "columns": [
      {
        "Header": "Общее количество элементов систем функционального обеспечения",
        "accessor": "общее_количество_элементов_систем_функционального_обеспечения",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "381",
            "columns": [
              {
                "Header": "381",
                "accessor": "yard_func_elements_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая длина элементов систем функционального обеспечения",
        "accessor": "общая_длина_элементов_систем_функционального_обеспечения",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "382",
            "columns": [
              {
                "Header": "382",
                "accessor": "yard_func_elements_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Водопровод и канализация",
        "accessor": "водопровод_и_канализация",
        "columns": [
          {
            "Header": "Ливневая канализация (решетка)",
            "accessor": "ливневая_канализация_(решетка)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "383",
                "columns": [
                  {
                    "Header": "383",
                    "accessor": "yard_storm_sewer_grate_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Лоток водосточный без решетки",
            "accessor": "лоток_водосточный_без_решетки",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "384",
                "columns": [
                  {
                    "Header": "384",
                    "accessor": "yard_gutter_tray_wo_num"
                  }
                ]
              },
              {
                "Header": "Длина, п.м.",
                "accessor": "385",
                "columns": [
                  {
                    "Header": "385",
                    "accessor": "yard_gutter_tray_wo_length"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Лоток водосточный с решеткой",
            "accessor": "лоток_водосточный_с_решеткой",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "386",
                "columns": [
                  {
                    "Header": "386",
                    "accessor": "yard_func_elements_gutter_tray_num"
                  }
                ]
              },
              {
                "Header": "Длина, п.м.",
                "accessor": "387",
                "columns": [
                  {
                    "Header": "387",
                    "accessor": "yard_func_elements_gutter_tray_length"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Люк подземных коммуникаций (смотровой колодец)",
            "accessor": "люк_подземных_коммуникаций_(смотровой_колодец)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "388",
                "columns": [
                  {
                    "Header": "388",
                    "accessor": "yard_func_elements_underground_hatch_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Дорожные элементы",
        "accessor": "дорожные_элементы",
        "columns": [
          {
            "Header": "Антипарковочный столбик",
            "accessor": "антипарковочный_столбик",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "389",
                "columns": [
                  {
                    "Header": "389",
                    "accessor": "yard_func_elements_overall_column_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Бетонный блок для защиты от наездов",
            "accessor": "бетонный_блок_для_защиты_от_наездов",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "390",
                "columns": [
                  {
                    "Header": "390",
                    "accessor": "yard_concrete block_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Боллард",
            "accessor": "боллард",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "391",
                "columns": [
                  {
                    "Header": "391",
                    "accessor": "yard_bollard_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Делиниатор",
            "accessor": "делиниатор",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "392",
                "columns": [
                  {
                    "Header": "392",
                    "accessor": "yard_deliniator_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Дорожная разметка (продольная)",
            "accessor": "дорожная_разметка_(продольная)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "393",
                "columns": [
                  {
                    "Header": "393",
                    "accessor": "yard_func_elements_road_marking_long_num"
                  }
                ]
              },
              {
                "Header": "Длина, п.м.",
                "accessor": "394",
                "columns": [
                  {
                    "Header": "394",
                    "accessor": "yard_func_elements_road_marking_long_length"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Дорожное зеркало",
            "accessor": "дорожное_зеркало",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "395",
                "columns": [
                  {
                    "Header": "395",
                    "accessor": "yard_mirror_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Искусственная дорожная неровность",
            "accessor": "искусственная_дорожная_неровность",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "396",
                "columns": [
                  {
                    "Header": "396",
                    "accessor": "yard_artificial_road_roughness_num"
                  }
                ]
              },
              {
                "Header": "Длина, п.м.",
                "accessor": "397",
                "columns": [
                  {
                    "Header": "397",
                    "accessor": "yard_artificial_road_roughness_length"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Искусственная дорожная неровность со светоотражающими элементами\n            композитный материал",
            "accessor": "искусственная_дорожная_неровность_со_светоотражающими_элементами_____________композитный_материал",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "398",
                "columns": [
                  {
                    "Header": "398",
                    "accessor": "yard_road_bumps_num"
                  }
                ]
              },
              {
                "Header": "Длина, п.м.",
                "accessor": "399",
                "columns": [
                  {
                    "Header": "399",
                    "accessor": "yard_road_bumps_length"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Полусфера антипарковочная",
            "accessor": "полусфера_антипарковочная",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "400",
                "columns": [
                  {
                    "Header": "400",
                    "accessor": "yard_anti_parking_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светофор",
            "accessor": "светофор",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "401",
                "columns": [
                  {
                    "Header": "401",
                    "accessor": "yard_func_elements_support_sports_traffic_lights_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Освещение",
        "accessor": "освещение",
        "columns": [
          {
            "Header": "Мачта ЛЭП",
            "accessor": "мачта_лэп",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "402",
                "columns": [
                  {
                    "Header": "402",
                    "accessor": "yard_func_elements_power_lines_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Опора наружного освещения светильник галогеновый",
            "accessor": "опора_наружного_освещения_светильник_галогеновый",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "403",
                "columns": [
                  {
                    "Header": "403",
                    "accessor": "yard_func_elements_support_halogen_lamp_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Опора наружного освещения светильник люминесцентный",
            "accessor": "опора_наружного_освещения_светильник_люминесцентный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "404",
                "columns": [
                  {
                    "Header": "404",
                    "accessor": "yard_func_elements_support_luminescent_lamp_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Опора наружного освещения светильник накаливания",
            "accessor": "опора_наружного_освещения_светильник_накаливания",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "405",
                "columns": [
                  {
                    "Header": "405",
                    "accessor": "yard_func_elements_support_incandescent_lamp_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Опора наружного освещения светильник ртутный",
            "accessor": "опора_наружного_освещения_светильник_ртутный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "406",
                "columns": [
                  {
                    "Header": "406",
                    "accessor": "yard_func_elements_support_mercury_lamp_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Опора наружного освещения светильник светодиодный",
            "accessor": "опора_наружного_освещения_светильник_светодиодный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "407",
                "columns": [
                  {
                    "Header": "407",
                    "accessor": "yard_func_elements_support_led_lamp_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Прожектор для спортивной площадки",
            "accessor": "прожектор_для_спортивной_площадки",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "408",
                "columns": [
                  {
                    "Header": "408",
                    "accessor": "yard_func_elements_support_sports_floodlight_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светильник подвесной галогеновый",
            "accessor": "светильник_подвесной_галогеновый",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "409",
                "columns": [
                  {
                    "Header": "409",
                    "accessor": "yard_func_elements_halogen_lamps_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светильник подвесной люминесцентный",
            "accessor": "светильник_подвесной_люминесцентный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "410",
                "columns": [
                  {
                    "Header": "410",
                    "accessor": "yard_func_elements_lumin_lamps_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светильник подвесной накаливания",
            "accessor": "светильник_подвесной_накаливания",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "411",
                "columns": [
                  {
                    "Header": "411",
                    "accessor": "yard_func_elements_incand_lamps_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светильник подвесной ртутный",
            "accessor": "светильник_подвесной_ртутный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "412",
                "columns": [
                  {
                    "Header": "412",
                    "accessor": "yard_func_elements_mercurial_lamps_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светильник подвесной светодиодный",
            "accessor": "светильник_подвесной_светодиодный",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "413",
                "columns": [
                  {
                    "Header": "413",
                    "accessor": "yard_func_elements_led_lamps_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светильник уличный ландшафтная подсветка",
            "accessor": "светильник_уличный_ландшафтная_подсветка",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "414",
                "columns": [
                  {
                    "Header": "414",
                    "accessor": "yard_street_lamp_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Светильник уличный фонарик парковый",
            "accessor": "светильник_уличный_фонарик_парковый",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "415",
                "columns": [
                  {
                    "Header": "415",
                    "accessor": "yard_street_lamp_park_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Указатели и знаки",
        "accessor": "указатели_и_знаки",
        "columns": [
          {
            "Header": "Дорожный знак",
            "accessor": "дорожный_знак",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "416",
                "columns": [
                  {
                    "Header": "416",
                    "accessor": "yard_func_elements_signs_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Навигационный указатель",
            "accessor": "навигационный_указатель",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "417",
                "columns": [
                  {
                    "Header": "417",
                    "accessor": "yard_nav_pointer_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Указатель подземных коммуникаций",
            "accessor": "указатель_подземных_коммуникаций",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "418",
                "columns": [
                  {
                    "Header": "418",
                    "accessor": "yard_func_elements_support_underground_index_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      },
      {
        "Header": "Дополнительные элементы",
        "accessor": "дополнительные_элементы",
        "columns": [
          {
            "Header": "Вентиляционный выход",
            "accessor": "вентиляционный_выход",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "419",
                "columns": [
                  {
                    "Header": "419",
                    "accessor": "yard_vent_exit_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Вышка связи многофункциональная",
            "accessor": "вышка_связи_многофункциональная",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "420",
                "columns": [
                  {
                    "Header": "420",
                    "accessor": "yard_cell_tower_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Иной элемент СФО (байпас, временная коммуникация)",
            "accessor": "иной_элемент_сфо_(байпас__временная_коммуникация)",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "421",
                "columns": [
                  {
                    "Header": "421",
                    "accessor": "yard_other_sfo_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Ковер МГС",
            "accessor": "ковер_мгс",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "422",
                "columns": [
                  {
                    "Header": "422",
                    "accessor": "yard_func_elements_carpet_mgs_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Ковер ОДК",
            "accessor": "ковер_одк",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "423",
                "columns": [
                  {
                    "Header": "423",
                    "accessor": "yard_odk_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Паркомат, платежный терминал",
            "accessor": "паркомат__платежный_терминал",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "424",
                "columns": [
                  {
                    "Header": "424",
                    "accessor": "yard_parking_terminal_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Пожарный гидрант",
            "accessor": "пожарный_гидрант",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "425",
                "columns": [
                  {
                    "Header": "425",
                    "accessor": "yard_hydrant_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          },
          {
            "Header": "Шлагбаум",
            "accessor": "шлагбаум",
            "columns": [
              {
                "Header": "Количество, шт.",
                "accessor": "426",
                "columns": [
                  {
                    "Header": "426",
                    "accessor": "yard_func_elements_support_barrier_num"
                  }
                ]
              }
            ],
            "rowSpan": 3
          }
        ]
      }
    ]
  },
  {
    "Header": "Водоемы",
    "accessor": "водоемы",
    "columns": [
      {
        "Header": "Общеее количество водоемов",
        "accessor": "общеее_количество_водоемов",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "427",
            "columns": [
              {
                "Header": "427",
                "accessor": "yard_water_building_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь водоемов",
        "accessor": "общая_площадь_водоемов",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "428",
            "columns": [
              {
                "Header": "428",
                "accessor": "yard_water_building_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Болото",
        "accessor": "болото",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "429",
            "columns": [
              {
                "Header": "429",
                "accessor": "yard_water_swamp_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "430",
            "columns": [
              {
                "Header": "430",
                "accessor": "yard_water_swamp_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Озеро",
        "accessor": "озеро",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "431",
            "columns": [
              {
                "Header": "431",
                "accessor": "yard_water_lake_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "432",
            "columns": [
              {
                "Header": "432",
                "accessor": "yard_water_lake_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Пруд",
        "accessor": "пруд",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "433",
            "columns": [
              {
                "Header": "433",
                "accessor": "yard_water_pond_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "434",
            "columns": [
              {
                "Header": "434",
                "accessor": "yard_water_pond_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Река",
        "accessor": "река",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "435",
            "columns": [
              {
                "Header": "435",
                "accessor": "yard_water_river_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "436",
            "columns": [
              {
                "Header": "436",
                "accessor": "yard_water_river_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Ручей",
        "accessor": "ручей",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "437",
            "columns": [
              {
                "Header": "437",
                "accessor": "yard_water_stream_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "438",
            "columns": [
              {
                "Header": "438",
                "accessor": "yard_water_stream_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Инженерные сооружения",
    "accessor": "инженерные_сооружения",
    "columns": [
      {
        "Header": "Общеее количество инженерных сооружений",
        "accessor": "общеее_количество_инженерных_сооружений",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "439",
            "columns": [
              {
                "Header": "439",
                "accessor": "yard_engineer_building_qty"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь инженерных сооружений",
        "accessor": "общая_площадь_инженерных_сооружений",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "440",
            "columns": [
              {
                "Header": "440",
                "accessor": "yard_engineer_building_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Сухой фонтан",
        "accessor": "сухой_фонтан",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "441",
            "columns": [
              {
                "Header": "441",
                "accessor": "yard_dry_fountain_dt_qty"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "442",
            "columns": [
              {
                "Header": "442",
                "accessor": "yard_dry_fountain_dt_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Пешеходный мост",
        "accessor": "пешеходный_мост",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "443",
            "columns": [
              {
                "Header": "443",
                "accessor": "yard_pedestrian_bridge_qty"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "444",
            "columns": [
              {
                "Header": "444",
                "accessor": "yard_pedestrian_bridge_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Пирс",
        "accessor": "пирс",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "445",
            "columns": [
              {
                "Header": "445",
                "accessor": "yard_pier_qty"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "446",
            "columns": [
              {
                "Header": "446",
                "accessor": "yard_pier_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Фонтан",
        "accessor": "фонтан",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "447",
            "columns": [
              {
                "Header": "447",
                "accessor": "yard_fountain_dt_qty"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "448",
            "columns": [
              {
                "Header": "448",
                "accessor": "yard_fountain_dt_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Иные объекты",
        "accessor": "иные_объекты",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "449",
            "columns": [
              {
                "Header": "449",
                "accessor": "yard_another_objects_qty"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "450",
            "columns": [
              {
                "Header": "450",
                "accessor": "yard_another_objects_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Катки",
    "accessor": "катки",
    "columns": [
      {
        "Header": "Общее количество катков",
        "accessor": "общее_количество_катков",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "451",
            "columns": [
              {
                "Header": "451",
                "accessor": "yard_ice_rink_num"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Общая площадь катков",
        "accessor": "общая_площадь_катков",
        "columns": [
          {
            "Header": "Площадь, кв.м.",
            "accessor": "452",
            "columns": [
              {
                "Header": "452",
                "accessor": "yard_ice_rink_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Крытый под металлоконструкцией с искусственным льдом",
        "accessor": "крытый_под_металлоконструкцией_с_искусственным_льдом",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "453",
            "columns": [
              {
                "Header": "453",
                "accessor": "yard_indoor_metal_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "454",
            "columns": [
              {
                "Header": "454",
                "accessor": "yard_indoor_metal_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Крытый с воздухоопорной конструкцией с искусственным льдом",
        "accessor": "крытый_с_воздухоопорной_конструкцией_с_искусственным_льдом",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "455",
            "columns": [
              {
                "Header": "455",
                "accessor": "yard_indoor_air_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "456",
            "columns": [
              {
                "Header": "456",
                "accessor": "yard_indoor_air_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Открытый с искусственным льдом на твердой поверхности массового типа",
        "accessor": "открытый_с_искусственным_льдом_на_твердой_поверхности_массового_типа",
        "columns": [
          {
            "Header": "Количество, шт.",
            "accessor": "457",
            "columns": [
              {
                "Header": "457",
                "accessor": "yard_open_rink_sport_mas_num"
              }
            ]
          },
          {
            "Header": "Площадь, кв.м.",
            "accessor": "458",
            "columns": [
              {
                "Header": "458",
                "accessor": "yard_open_rink_sport_mas_area"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  },
  {
    "Header": "Элемент сопряжения поверхностей",
    "accessor": "элемент_сопряжения_поверхностей",
    "columns": [
      {
        "Header": "Общая длина элементов сопряжения",
        "accessor": "общая_длина_элементов_сопряжения",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "459",
            "columns": [
              {
                "Header": "459",
                "accessor": "yard_abutment_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Гранитный бортовой камень",
        "accessor": "гранитный_бортовой_камень",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "460",
            "columns": [
              {
                "Header": "460",
                "accessor": "yard_fence_granite_stone_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Декоративный бортовой камень",
        "accessor": "декоративный_бортовой_камень",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "461",
            "columns": [
              {
                "Header": "461",
                "accessor": "yard_fence_decor_stone_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Дорожный бортовой камень",
        "accessor": "дорожный_бортовой_камень",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "462",
            "columns": [
              {
                "Header": "462",
                "accessor": "yard_fence_road_stone_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Резиновый бортовой камень",
        "accessor": "резиновый_бортовой_камень",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "463",
            "columns": [
              {
                "Header": "463",
                "accessor": "yard_rubber_curbstone_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      },
      {
        "Header": "Садовый бортовой камень",
        "accessor": "садовый_бортовой_камень",
        "columns": [
          {
            "Header": "Длина, п.м.",
            "accessor": "464",
            "columns": [
              {
                "Header": "464",
                "accessor": "yard_fence_garden_stone_length"
              }
            ]
          }
        ],
        "rowSpan": 4
      }
    ]
  }
];

